#### 🚀 BigNova – Système de Gestion de Parrainages

Projet **React + Node.js/Express** pour gérer les **prospects** et **parrains**.  
Comprend une interface **utilisateur** et **administrateur** avec fonctionnalités comme l’export CSV, la recherche dans les tables et une interface responsive.

---

## ✨ Fonctionnalités

- 📝 Soumission de **prospects** par les utilisateurs  
- 📊 Tableau de bord **administrateur** avec recherche et pagination  
- 💾 **Export CSV** des données de parrainages  
- 🔐 Authentification par **token**  
- 📱 Interface **responsive** (Bootstrap + Material UI)  

---

##### 🛠 Stack Technique

| Frontend               | Backend            | 
|------------------------|--------------------|
| React                  | Node.js            |                         
| React Router           | Express            |   
| Bootstrap              | MongoDB + Mongoose |         
| Material UI (DataGrid) | JWT                |                         
|react-toastify          | json2csv           |

---

## ⚡ Démarrage

### Prérequis

- Node.js ≥ 18  
- npm ou yarn  
- MongoDB Atlas 

### Installation

# Cloner le projet
```
git clone https://github.com/xCroC0dile/bigNovaTest.git
```

# Installer les dépendances frontend et backend et admin
```
cd admin
npm install

cd backend
npm install

cd frontend
npm install
````
### Configuration
Créer un fichier `.env` dans `backend` avec les variables suivantes :
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password   
``` 
### Lancement
# Démarrer le backend
```
cd backend
npm start
```
# Démarrer l'admin
```
cd admin
npm start
```
# Démarrer le frontend
```
cd frontend
npm start
```

