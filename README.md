# Isopacks

<div style="display: flex;">
<img src="https://isoflow-public.s3.eu-west-2.amazonaws.com/isopacks/isoflow/server.svg" alt="server" width="100"/>
<img src="https://isoflow-public.s3.eu-west-2.amazonaws.com/isopacks/isoflow/storage.svg" alt="storage" width="100"/>
<img src="https://isoflow-public.s3.eu-west-2.amazonaws.com/isopacks/isoflow/switch-module.svg" alt="switch" width="100"/>
</div>

This library brings together various collections of popular networking and cloud icons in one central place.  

You can drag and drop them as images into slides and documents, or import them into JavaScript / Typescript projects.  Many of the icons are maintained and provided by popular cloud service providers (e.g. AWS, GCP and Azure), some are available through community projects (see the [Kubernetes icon project](https://github.com/kubernetes/community/tree/master/icons)) and the more general icons are provided by the folks at [Isoflow.io](https://isoflow.io).

**Please read the LICENSE files associated with each Isopack**.

## Do I need Isoflow to use these icons?
No.  You can use these with your tool of choice.  However, if you're looking for a diagramming tool that supports these icons out of the box, we'd highly recommend [Isoflow.io](https://isoflow.io).

## What's in it
For a complete set of icons available, see this [page](https://v2.isoflow.io/docs/isopacks-reference).

## How to use

### Importing into Isoflow
See the Isoflow documentation here: [Importing Isopacks](https://v2.isoflow.io/docs/isopacks)

### Importing into a React app
Icons can be imported and displayed as `base64` encoded images (although make sure to consider the [tradeoffs](#self-hosting-icons-vs-importing-from-the-package) of importing using this method).

1. Install the `npm` package
```bash
npm install @isoflow/isopacks
```

2. Import the collections you want to use:

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

## Self-hosting icons vs importing from the package

- **Importing icons** directly from the npm package is practical but not recommended as it adds to the final bundle size.

- **Referencing icons via URL** enables the icons to be downloaded after the app loads.  This is the recommended approach for production apps.

## Contributing

For bugs, feature requests, and discussions please use [Github Issues](https://github.com/markmanx/isopacks/issues).

### Icon IDs

As a convention, the `id` of an Isopack icon should be the same as the icon's SVG filename (without the `.svg` extension).
This makes it easy to derive `id`s from the file structure.