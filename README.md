# Isopacks
A compilation of networking and cloud icons for use in diagrams.  Each collection we refer to as an "Isopack", for example there is an `aws` Isopack.

## Do I need Isoflow to use these icons?
No.  You can drop these icons into any diagramming tool that supports importing images.  However, if you're looking for a diagramming tool that supports these icons out of the box, check out [Isoflow.io](https://isoflow.io).

## What's in it
This library contains:
- General networking icons (e.g. server, switch, router) provided by the guys at [Isoflow.io](https://isoflow.io).
- Icons for popular cloud services (e.g. AWS, GCP, Azure, Kubernetes).  These are official icons provided by the cloud providers (and in some cases, by the community) and may come with licensing restrictions.

For a full list of icons, see the [this link]().

## How to use

### Import icons into a React app
Icons can be imported as `base64` encoded strings.  See the section [Trade-off's between importing vs self-hosting icons](#) for more information.

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