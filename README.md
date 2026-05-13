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
