echo "Switching to branch master"
git checkout master

echo "Bulding app ..."
npm run build

echo "Deploying files to server..."
scp -r dist/* fortuna@46.101.103.10:/var/www/fortunamedia/
echo "Done!"