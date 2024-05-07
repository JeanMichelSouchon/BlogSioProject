
# Informations d'authentification pour Proxmox
$serveur = "AdresseIPProxmox"
$utilisateur = "NomUtilisateur"
$motdepasse = "VotreMotDePasse"

# Fonction pour démarrer un container Proxmox
Function Démarrer-Container {
    param($nomContainer)
    Invoke-RestMethod -Method Post -Uri "https://$serveur/api2/json/nodes/localhost/lxc/$nomContainer/status/start" -Headers @{ Authorization = "PVEAPIToken=$utilisateur:$motdepasse" }
    Write-Host "Démarrage du container $nomContainer..."
}

# Fonction pour arrêter un container Proxmox
Function Arrêter-Container {
    param($nomContainer)
    Invoke-RestMethod -Method Post -Uri "https://$serveur/api2/json/nodes/localhost/lxc/$nomContainer/status/stop" -Headers @{ Authorization = "PVEAPIToken=$utilisateur:$motdepasse" }
    Write-Host "Arrêt du container $nomContainer..."
}

# Liste des noms de vos containers Proxmox
$containers = @("NomContainer1", "NomContainer2", "NomContainer3")

# Démarrer tous les containers
$containers | ForEach-Object { Démarrer-Container $_ }

# Attendre un court délai pour que les containers démarrent complètement
Start-Sleep -Seconds 30

# Arrêter tous les containers
$containers | ForEach-Object { Arrêter-Container $_ }