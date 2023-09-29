# Isopacks
A compilation of networking and cloud icons for use in diagrams.

## What's in it
The library contains:
- General networking icons (e.g. server, switch, router) provided by the guys at [Isoflow.io](https://isoflow.io).
- Icons for popular cloud services (e.g. AWS, GCP, Azure, Kubernetes).  These are official icons provided by the cloud providers (and in some cases, by the community) and may come with licensing restrictions.

For a full list of icons, see the [this link]().

## How to use

### Import icons into a React app
Icons can be imported as `base64` encoded strings.  See the section [Trade-off's between importing vs self-hosting icons](#) for more information.

- `npm install isopacks`
- Import the collection you want to use
```jsx
import networkingIcons from 'isopacks/networking';

const MyComponent = () => {
    return (
        <>
            {networkingIcons.map(icon => <img src={icon.url} alt={icon.name} />)}
        </>
    )
}
```

### Self-hosting icons

### Importing icons directly
You can import specific icon sets 

### Self hosting icons