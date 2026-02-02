# Images optimisées pour Demo Site DiscutAI BR

## Vue d'ensemble

Ce document recense toutes les images optimisées pour les thèmes **Generic** et **Restaurant** du site démo DiscutAI BR. Toutes les images ont été sélectionnées selon les critères du style de la présentation client :

- **Style** : Photo ultra-réaliste, qualité premium
- **Lumière** : Chaude (golden hour ou intérieur chaleureux)
- **Ambiance** : Scènes brésiliennes/LATAM, diversité, PME/small business
- **Composition** : Profondeur de champ légère (bokeh), negative space pour overlays
- **Licence** : Toutes les images sont sous licence Unsplash (royalty-free, usage commercial autorisé)

## Structure des fichiers

```
public/images/themes/
├── generico/
│   ├── hero.webp           (1920x1280, 107 KB)
│   ├── gallery-01.webp     (800x600, 32 KB)
│   ├── gallery-02.webp     (800x600, 60 KB)
│   └── gallery-03.webp     (800x600, 84 KB)
└── restaurante/
    ├── hero.webp           (1920x1280, 245 KB)
    ├── gallery-01.webp     (800x600, 119 KB)
    ├── gallery-02.webp     (800x600, 83 KB)
    └── gallery-03.webp     (800x600, 89 KB)
```

**Total : 8 images | Taille totale : ~820 KB | Moyenne : 102 KB par image**

---

## Thème : GENERICO (PME/Serviços)

### Hero Image
- **Fichier** : `hero.webp`
- **Dimensions** : 1920x1280px (ratio 3:2)
- **Poids** : 107 KB
- **Source** : https://unsplash.com/photos/photo-1556742111-a301076d9d18
- **Alt** : "Proprietário de pequeno negócio usando smartphone na loja"
- **Description** : Propriétaire de petit commerce utilisant son smartphone dans sa boutique. Lumière naturelle chaude, ambiance accueillante et professionnelle. Focus sur la digitalisation des PME.

### Galerie

#### Image 1
- **Fichier** : `gallery-01.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 32 KB
- **Source** : https://unsplash.com/photos/photo-1556745753-b2904692b3cd
- **Alt** : "Cliente sendo atendido em pequeno comércio"
- **Description** : Interaction client-vendeur dans un petit commerce. Atmosphère chaleureuse, service personnalisé.

#### Image 2
- **Fichier** : `gallery-02.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 60 KB
- **Source** : https://unsplash.com/photos/photo-1542744173-8e7e53415bb0
- **Alt** : "Espaço de trabalho moderno com laptop e smartphone"
- **Description** : Workspace moderne avec laptop et smartphone. Bureau propre, café, ambiance productive.

#### Image 3
- **Fichier** : `gallery-03.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 84 KB
- **Source** : https://unsplash.com/photos/photo-1556761175-5973dc0f32e7
- **Alt** : "Terminal de pagamento em uso"
- **Description** : Terminal de paiement sans contact. Gros plan sur les mains effectuant une transaction, ambiance moderne.

---

## Thème : RESTAURANTE

### Hero Image
- **Fichier** : `hero.webp`
- **Dimensions** : 1920x1280px (ratio 3:2)
- **Poids** : 245 KB
- **Source** : https://unsplash.com/photos/photo-1414235077428-338989a2e8c0
- **Alt** : "Interior acolhedor de restaurante com mesas preparadas"
- **Description** : Salle de restaurant accueillante avec tables dressées. Éclairage ambiant chaud, atmosphère conviviale et premium.

### Galerie

#### Image 1
- **Fichier** : `gallery-01.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 119 KB
- **Source** : https://unsplash.com/photos/photo-1565299624946-b28f40a0ae38
- **Alt** : "Hambúrguer gourmet servido com batatas"
- **Description** : Burger gourmet avec frites. Présentation soignée, couleurs vibrantes, photo appétissante.

#### Image 2
- **Fichier** : `gallery-02.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 83 KB
- **Source** : https://unsplash.com/photos/photo-1517248135467-4c7edcad34c4
- **Alt** : "Ambiente interno do restaurante durante serviço"
- **Description** : Intérieur du restaurant pendant le service. Clients en arrière-plan (flou artistique), ambiance vivante.

#### Image 3
- **Fichier** : `gallery-03.webp`
- **Dimensions** : 800x600px (ratio 4:3)
- **Poids** : 89 KB
- **Source** : https://unsplash.com/photos/photo-1559339352-11d035aa65de
- **Alt** : "Chef preparando pratos na cozinha"
- **Description** : Chef finalisant un plat en cuisine professionnelle. Focus sur la qualité et le savoir-faire.

---

## Optimisation des images

Toutes les images ont été optimisées avec **Sharp** :

- **Format** : WebP (excellent compromis qualité/poids)
- **Qualité** : 85% (sweet spot pour le WebP)
- **Redimensionnement** :
  - Hero : 1920x1280px (adapté pour full-width hero)
  - Gallery : 800x600px (adapté pour grille responsive)
- **Fit** : `cover` avec centrage intelligent
- **Compression** : Mozjpeg pour les sources JPEG

### Performance

- **Lighthouse** : Score > 90 attendu
- **LCP** : < 2.5s avec priority loading sur hero
- **CLS** : Minimal grâce aux dimensions explicites
- **Lazy loading** : Automatique pour les images de galerie

---

## Comment régénérer les images

Si vous devez mettre à jour les images :

1. **Modifier les sources** : Éditez `scripts/image-sources.json`
2. **Exécuter le script** : `npm run optimize-images`
3. **Vérifier les résultats** : Les images seront dans `public/images/themes/`

Le script télécharge automatiquement depuis les URLs spécifiées, redimensionne, convertit en WebP et optimise.

---

## Crédits photos

Toutes les photos proviennent d'Unsplash et sont utilisées sous licence Unsplash :
https://unsplash.com/license

**Photographes** :
- Austin Distel (business/workspace)
- Jay Wennington (restaurant/food)
- Marvin Meyer (small business)
- Et autres contributeurs Unsplash

---

## Conformité légale

- ✅ Licence commerciale valide (Unsplash License)
- ✅ Pas de marques visibles
- ✅ Pas de visages reconnaissables de célébrités
- ✅ Images libres de droits pour usage commercial
- ✅ Attribution non requise (mais recommandée)

**Disclaimer** : "Imagens ilustrativas (demo) • Fotos de Unsplash" affiché dans le footer du site.

---

*Dernière mise à jour : 2 février 2026*
