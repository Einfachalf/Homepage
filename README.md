
`# Ultimatives Frontend-Template  ![Vorschau](https://cdn.discordapp.com/attachments/797485737272541250/952208625806495815/image_5.png)  > Die meisten Elemente stammen von [meiner Webseite](https://einfachalex.net).  [![Mit Vercel bereitstellen](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=Einfachalf/TemplateCSS)  ## Inhaltsstoffe ✨:  - NextJS 🚀 - TailwindCSS 🦄 - Typescript 🦺 - Unterstützung für den Dunkelmodus 🌓 - ESLint + Prettier Konfiguration 📂 - Husky 🐶 - Selbst gehostete Inter-Schriftart ␊  Im Ordner _components_ verwende für jede deiner Seiten den Container, da er einen wiederverwendbaren Ausgangspunkt für jede Seite bietet.  ```jsx <Container>...SeitenElemente</Container>`

Erste Schritte
--------------

1.  Mit 'Als Vorlage verwenden' im Repository ![Vorschau](https://cdn.discordapp.com/attachments/797485737272541250/952208604386189332/Group_11.png)
    
2.  Das Projekt klonen
    

bashCopy code

`# http git clone https://github.com/Einfachalf/TemplateCSS.git`

bashCopy code

`# ssh git clone git@github.com:Einfachalf/TemplateCSS.git`

3.  Mit `create-next-app`

luaCopy code

`npx create-next-app -e https://github.com/Einfachalf/TemplateCSS Projektname`

Installiere die erforderlichen Pakete und starte die Vorlage

bashCopy code

`cd Projektname yarn install`

Inbegriffen
-----------

### Benutzerdefinierte classNames-Funktion

> Unter `/lib/classNames`

### Pakete

1.  Next-Themes: Eine Abstraktion für Themes in deiner Next.js-App.
2.  react-use: react-hooks

### Benutzerdefinierte globals.css

1.  Benutzerdefinierte Unterstreichung
2.  Vercel-Navigationsleiste
3.  Behebt Firefox-, Edge- und IE-Bugs bei Überläufen

### Absolute Importe

javascriptCopy code

`import TextField from '../../../components/TextField.tsx'`

ändert sich zu

javascriptCopy code

`import TextField from 'components/TextField.tsx'`

### SEO-Optimierung in `Container.tsx`

### Ordnerstruktur & Organisation

> Unter `/components/` & `/public/`

### Selbst gehostete Inter-Schriftart

> Unter `/public/fonts/`

### 404-Seite

### Favicons und weitere Konfigurationen

> Unter `/public/static/favicons/`

![Vorschau](https://cdn.discordapp.com/attachments/797485737272541250/952211815046197278/Frame_7.png)



