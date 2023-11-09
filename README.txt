ionic cap add android
ionic cap sync
ionic cap build android
ionic cap run android --external -livereload

ionic build --prod && npx cap copy android && npx cap open android
