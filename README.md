1- npx create-next-app@latest
      

2- in tsconfig.json change path as you are going to change folder structure from app/ to src/app
    from -    
 "paths": {
      "@/*": ["./*"]
    }
    to- 
 "paths": {
      "@/*": ["./src/*"]
    }

3- change 
  "jsx": "react-jsx",
    to
  "jsx": "preserve",

4- Move all files to root level 
    
5- in tsconfig.json -- "target": "ES2017" -> "target": "es5" 

6- for particular repo change github access to point your private account - 
 - git config --local user.name "aayushikh02"
 - git config --local user.email "aayushikh02@gmail.com"
 - git config --local --list