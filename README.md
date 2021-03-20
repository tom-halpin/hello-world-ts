# READM.md

Hello World with some minor bells and whistles in TypeScript

## Setup

```console
npm install -g TypeScript
```

```console
npm install inquirer
```

```console
npm install chalk
```

## Compile

Was originally compiling using following command line

```console
tsc hello-world.tsc
```

but got following error after importing ```chalk```

added ```"esModuleInterop": true``` to ```tsconfig.json``` to fix as per Mr Google

now compiling using

```console
tsc
```


## Run

```console
node hello-world
```
