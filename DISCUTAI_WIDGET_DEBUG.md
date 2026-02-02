# Debug du Widget DiscutAI

## Problèmes identifiés

### 1. ❌ Erreur "Désolé, une erreur est survenue"

**Causes possibles** :
- Le `assistantWorkspaceId` n'est pas valide ou l'assistant n'existe pas
- L'assistant n'est pas publié/activé sur la plateforme DiscutAI
- Problème de permissions ou de configuration côté serveur DiscutAI
- Le baseUrl est incorrect

**Solutions** :

#### A. Vérifier le Workspace ID
1. Connectez-vous à https://v2.discutai.com
2. Allez dans votre workspace/assistant
3. Copiez le **vrai ID** de l'assistant
4. Mettez-le à jour dans `components/DiscutAIWidget.tsx` ligne 14 et 25

#### B. Vérifier que l'assistant est activé
1. Sur la plateforme DiscutAI, assurez-vous que l'assistant est :
   - ✅ Publié
   - ✅ Activé
   - ✅ Configuré avec au moins un message de bienvenue
   - ✅ A les bonnes permissions pour le domaine du site

#### C. Vérifier la console du navigateur
Ouvrez la console (F12) et cherchez les logs :
```
🔧 Configuration DiscutAI Widget: {...}
✅ DiscutAI Widget chargé pour le thème: generico
📋 Config finale: {...}
```

Si vous voyez des erreurs API (4xx, 5xx), notez le code d'erreur.

### 2. 🎨 Texte du champ de saisie illisible

**Cause** : Contraste insuffisant entre la couleur du texte et le fond

**Solution appliquée** :
- Fichier CSS créé : `app/discutai-widget-fix.css`
- Importé dans `app/layout.tsx`
- Force un contraste élevé pour le champ de saisie

---

## Configuration actuelle

```typescript
generico: {
  assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
  assistantName: "Assistente Empresa Modelo",
  themeColor: "#6366F1",
  position: "bottom-right",
  welcomeMessage: "Olá! Bem-vindo à Empresa Modelo...",
  showAvatar: true,
  width: 350,
  height: 500,
  baseUrl: "https://v2.discutai.com",
}
```

---

## Étapes de résolution

### Étape 1 : Obtenir le bon Workspace ID

**Option A** : Via l'interface DiscutAI
1. Connectez-vous à https://v2.discutai.com
2. Sélectionnez votre assistant
3. Dans les paramètres, copiez l'ID complet

**Option B** : Créer un nouvel assistant test
1. Créez un assistant simple sur DiscutAI
2. Configurez-le avec un message de bienvenue
3. Publiez-le
4. Copiez son ID

### Étape 2 : Mettre à jour la configuration

Éditez `components/DiscutAIWidget.tsx` :

```typescript
generico: {
  assistantWorkspaceId: "VOTRE-VRAI-ID-ICI", // ← Remplacer
  assistantName: "Assistente Empresa Modelo",
  themeColor: "#6366F1",
  position: "bottom-right",
  welcomeMessage: "Olá! Bem-vindo à Empresa Modelo...",
  showAvatar: true,
  width: 350,
  height: 500,
  baseUrl: "https://v2.discutai.com",
}
```

### Étape 3 : Tester en local

```bash
npm run dev
```

Ouvrez http://localhost:3000?theme=generico et vérifiez la console.

### Étape 4 : Déployer

```bash
git add .
git commit -m "fix: update DiscutAI workspace ID"
git push vercel main
```

---

## Alternative : Fallback vers BotWidget

Si le widget DiscutAI continue de ne pas fonctionner, vous pouvez temporairement désactiver le widget DiscutAI et utiliser le BotWidget démo pour tous les thèmes.

Dans `app/page.tsx`, remplacez :

```typescript
{(currentThemeId === 'restaurante' || currentThemeId === 'generico') ? (
  <DiscutAIWidget theme={theme} />
) : (
  <BotWidget theme={theme} />
)}
```

Par :

```typescript
<BotWidget theme={theme} />
```

---

## Vérifications supplémentaires

### Vérifier que le script se charge

Dans la console du navigateur :
```javascript
console.log(window.DiscutAIWidget);
```

Devrait afficher la config complète.

### Vérifier les requêtes réseau

1. Ouvrez DevTools → Network
2. Filtrez par "discutai"
3. Cherchez les requêtes qui échouent (rouge)
4. Cliquez dessus pour voir le message d'erreur exact

---

## Contact Support DiscutAI

Si le problème persiste, contactez le support DiscutAI avec :
- Le Workspace ID utilisé
- L'URL de votre site
- Les logs de la console
- Une capture d'écran de l'erreur

**Support** : support@discutai.com (ou le canal approprié)

---

*Document mis à jour : 2 février 2026*
