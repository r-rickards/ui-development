# Versioning

## Semantic Versioning 2.0.0

https://semver.org/

<img src="https://i0.wp.com/n8d.at/wp-content/uploads/2016/10/semantic-version.png?resize=768%2C372&ssl=1" alt="semver" />

##### Backus–Naur Form Grammar

```
<version core> ::= <major> "." <minor> "." <patch>
```

That is all there is to it. The label is optional.

### package,json

Set a proper version in **package.json**. To update the version you simply need to execute the following command with the option of choice.

```
npm version <major|minor|patch>
```

To increment the major version:

```
npm version major
```

To increment the minor version:

```
npm version minor
```

To patch a version:

```
npm version patch
```

#### Validating versions

See: https://regex101.com/r/Ly7O1x/3/

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

See: https://regex101.com/r/vkijKf/1/

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-za-z-]_))_))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)\*))?\$
```
