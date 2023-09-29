# Isopacks
A compilation of networking and cloud icons for use in diagrams.

## What's in it
- General networking icons (e.g. server, switch, router).
- Icons for popular cloud services (e.g. AWS, GCP, Azure, Kubernetes)

## How to use

### Import icons into a React app
Icons can be imported as `base64` encoded strings (see below for more information on the tradeoffs between importing icons using this approach vs self-hosting the icon files).

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

### Importing icons directly
You can import specific icon sets 

### Self hosting icons