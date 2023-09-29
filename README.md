# Isopacks
The goal of this library is to expose various collections of popular networking and cloud icons in a way that is easy to import and use in Javascript projects.  Many of the icon sets are provided for free by popular cloud service providers (e.g. AWS, GCP and Azure), some are provided by the community (see the [Kubernetes icon project](https://github.com/kubernetes/community/tree/master/icons)) and the more general icons are provided by the guys at [Isoflow.io](https://isoflow.io).

**Please read the LICENSE files associated with each isopack and respect the licenses of each icon provider**.

## Do I need Isoflow to use these icons?
No.  You can drop these icons into any diagramming tool that supports importing images.  However, if you're looking for a diagramming tool that supports these icons out of the box, check out [Isoflow.io](https://isoflow.io).

## What's in it
For a full list of icons, see the [this link](icons.md).

## How to use

### Import icons into a React app
Icons can be imported as `base64` encoded strings.  See this section on [tradeoffs](#trade-offs-between-importing-vs-self-hosting-icons) for more information on importing options.

- `npm install isopacks`
- Import the collection you want to use
```jsx
import awsIcons from 'isopacks/aws';

const MyComponent = () => {
    return (
        <>
            {awsIcons.map(icon => <img src={icon.url} alt={icon.name} />)}
        </>
    )
}
```

## Trade-off's between importing vs self-hosting icons

- **Importing icons** directly from the npm package adds to the final bundle size. Users will have to download *all* assets in the Isopack before your app loads (which can be a problem if there are a lot of icons).

- **Referencing icons via URL** enables the icons to be downloaded later on, after the app loads. This also activates the browser's cache for individual icons so that they can be loaded instantly later on.