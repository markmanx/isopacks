# Isopacks
This library brings together existing collections of popular networking and cloud icons in a central place, so that they can be used in slides, documents or imported into JavaScript projects with common metadata.  Many of the icon sets are provided for free by popular cloud service providers (e.g. AWS, GCP and Azure), some are available through community projects (see the [Kubernetes icon project](https://github.com/kubernetes/community/tree/master/icons)) and the more general icons are provided by the guys at [Isoflow.io](https://isoflow.io).

**Please read the LICENSE files associated with each isopack and respect the licenses of each icon provider**.

## Do I need Isoflow to use these icons?
No.  You can use these with your tool of choice.  However, if you're looking for a diagramming tool that supports these icons out of the box, check out [Isoflow.io](https://isoflow.io).

## What's in it
Index coming soon, for now you can just look inside the `/collections` folder.

## How to use

### Import icons into a React app
Icons can be imported as `base64` encoded strings.  See this section on [tradeoffs](#trade-offs-between-importing-vs-self-hosting-icons) for more information.

- `npm install @isoflow/isopacks`
- Import the collection you want to use
```jsx
import awsIsopack from '@isoflow/isopacks/dist/aws';

const MyComponent = () => {
    return (
        <>
            {awsIsopack.icons.map(icon => <img src={icon.url} alt={icon.name} />)}
        </>
    )
}
```

## Trade-off's between importing vs self-hosting icons

- **Importing icons** directly from the npm package is practical but not recommended as it adds to the final bundle size ().

- **Referencing icons via URL** enables the icons to be downloaded later on, after the app loads. This also activates the browser's cache for individual icons so that they can be loaded instantly later on.