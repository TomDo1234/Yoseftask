Steps in order to get the enviromnent up and running:

Step 1:  run docker-compose up , this will set up the wordpress enviromnent, you need docker and docker-compose installed for this
Step 2: go to localhost:8080  , this is the adminer port defined by the docker compose file which gives a gui to interact with the mysql
database,   login with Username as wordpress, password and database are also "wordpress"
Step 3: click import , then upload the wordpress.sql file from this repository 

Step 4: navigate to wp/wp-content/plugins/tomdo-plugin  and run npm install and then npm run start, this will build the blocks for the plugin.

Step 5: when that is done open another terminal, do not close the old one that you used docker-compose up on, you should be in the root directory of this repo like before, run npm install, then run gatsby develop , you need gatsby cli installed to do this. 

Gatsby will tell you that something is already running in port 8000, this would be the wordpress instance, it will ask you to run on 
another port, say yes.

step 6: After the gatsby dev server is set up go to localhost:8001 and then navigate to /products/vinylmaster-cut/ and view the front end

Step 7: to inspect the wordpress backend go to localhost:8000 

Zoom me or call me in order to discuss what I did with the code
