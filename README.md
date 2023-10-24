# NOTE: may need to give script execution perms via `chmod a+x scripts/bundle:install.sh` or similar

## Install
`yarn`

## Bundle and install onto a running Android device via:
- `yarn bundle:install` (Average TTFD on my slow Android device: 1995ms)
- OR `yarn bundle:install+esbuild` (Average TTFD on my slow Android device: 3250ms)

## View difference in bundle output for each command:
- `yarn bundle:analyse` (40.7 MB)
- OR `yarn bundle:analyse+esbuild` (34.7 MB)
