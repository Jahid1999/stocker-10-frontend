# stocker-10-frontnend
An academic project of Software Project Management course

# Prerequisite

Preferred Node version 16.16.0 <br>
Preferred Npm version 8.11.0

If you are currently using another version of node supporting various projects then it is suggested to use **node version manager (NVM)** in order to alter between the node versions while running different projects

**Used angular versions**
_______________________________
@angular-devkit/architect    0.1401.1 (cli-only) <br>
@angular-devkit/core         14.1.1 (cli-only) <br>
@angular-devkit/schematics   14.1.1 (cli-only) <br>
@schematics/angular          14.1.1 (cli-only) <br>

If you are running on a lower version of angular cli then will have to upgrade.

There are various ways for updating angular cli version. One of the easiest approaches is as follows,

Uninstall the existing version <br>
```bash 
npm uninstall -g @angular/cli

``` 
Clear cache <br>
```bash
npm cache clean --force
```
    
Install latest version of angular cli <br>
```bash
npm install -g @angular/cli@latest
```

