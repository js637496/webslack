White list the pop up so it stops asking.

sudo mkdir -p /etc/opt/chrome/policies/managed/ && echo '{ "URLAllowlist": ["slack://*"] }' |sudo tee /etc/opt/chrome/policies/managed/allowlist.json


The extension will take you to the link you orignially attempted to access.
