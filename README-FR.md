# 📋 FormScript — Pont de Clarification Interactive des Spécifications IA
> **Un outil web interactif et léger qui transforme les questions d'une IA en un formulaire interactif dans le navigateur, garantissant des spécifications à 100% précises pour une génération de code sans ambiguïté.**

Lire dans d'autres langues : [English (Anglais)](./README-EN.md) | [العربية (Arabe)](./README-AR.md) | [Documentation Principale](./README.md)  
🤖 **Pour les Agents IA :** Consultez [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md)

---

## 💡 Le Problème et la Solution

Lors de demandes de développement adressées aux IA (ChatGPT, Claude, Cursor, Antigravity, Copilot), les résultats sont souvent imprécis en raison d'un manque de spécifications claires.

Répondre à 5 à 10 questions techniques dans une fenêtre de chat textuelle est fastidieux et lent. **FormScript** résout ce problème efficacement :

```
[Chat IA] ────(Crée fichier questions)───> [Dossier questions/] ───> [Formulaire Interactif]
                                                                             │
[Code 100% Précis] <──(Coller Résultat)──── [Copie en 1 Clic] <──────(Sélection des Réponses)
```

---

## ⚡ Caractéristiques Principales

1. **Interface par défaut en Anglais avec Sélecteur Multilingue (EN / AR / FR) :**
   - Basculez instantanément entre l'**Anglais (LTR)**, l'**Arabe (RTL)** et le **Français (LTR)** avec une adaptation dynamique de l'interface et de la typographie.
2. **Support Illimité des Langues pour les Questions :**
   - L'IA détecte la langue de votre conversation et formule les questions dans votre langue (Français, Arabe, Anglais, Espagnol, etc.). Aucune restriction linguistique.
3. **Option « Autre » Dynamique :**
   - Chaque question comporte une option « Autre ». Une fois cochée, un champ de texte s'affiche fluidement pour saisir vos remarques personnalisées.
4. **Synchronisation Directe avec le Dossier `questions/` :**
   - Les fichiers ajoutés dans `questions/` sont immédiatement détectés par le serveur sans copier-coller manuel.
5. **Gestionnaire de Fichiers Intégré :**
   - Visualisez, éditez directement le texte brut, supprimez ou ajoutez de nouveaux fichiers de questions depuis le navigateur.
6. **Copie en 1 Clic pour l'IA :**
   - Compile toutes les réponses sélectionnées au format Markdown propre, prêt à être collé dans votre chat IA.
7. **Lanceur en 1 Clic sous Windows (`run.bat`) :**
   - Vérifie Node.js, installe les dépendances (`npm install`), démarre le serveur et ouvre automatiquement `http://localhost:3000`.

---

## 🤖 Scénario d'Utilisation avec une IA

Dans n'importe quel projet (ex: `Projet ABC`), dites à votre agent IA :
> *"Je veux créer la fonctionnalité XYZ, utilise FormScript pour clarifier les besoins."*

1. **L'IA intègre FormScript :**
   ```bash
   git clone https://github.com/<VOTRE_UTILISATEUR>/FormScript.git formscript
   ```
2. **L'IA adapte la langue :** Si vous échangez en français, elle rédige les questions en français.
3. **L'IA génère le fichier de questions :** Elle l'enregistre dans `formscript/questions/fonctionnalite_xyz.txt`.
4. **L'IA lance le serveur :** Exécute `run.bat` ou `npm start`.
5. **Vous répondez dans le navigateur :** Cliquez sur les options et cliquez sur **« Copier pour l'IA »**.
6. **L'IA génère le code sans erreur :** Vous collez le résultat et obtenez un code fidèle à 100% à vos attentes.

---

## 🚀 Démarrage Rapide

### Sous Windows (Recommandé) :
Double-cliquez sur :
```cmd
run.bat
```

### Via le Terminal :
```bash
npm install
npm start
```
Puis accédez à : **`http://localhost:3000`**

---

## 📄 Licence
Projet open-source distribué sous licence **MIT**.
