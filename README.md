# Data Connect JS Testing

Repo for testing out how new changes affects existing apps.

Still in progress:
* Angular
* React

## Usage

### Generate json config files
```shell
firebase experiments:enable appsinit
cd vanilla-js-10
firebase apps:init
cd vanilla-js-11
firebase apps:init
```

```shell
chmod +x ./test.sh 
./test.sh [-p ./path-to-binary]
```

**Note: Be sure to download the latest version of the firebase CLI first**