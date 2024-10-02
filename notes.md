# to target the react dom we use ReactDom.createRoot() to target a specific dom element and create a root to display the your react components in.


then to render the code to the dom we add root.render();

in react components are functions 
props in react are used to pass information 

state is the info that can change every time the user interacts 



# Api(Application Programming Interface)

What essentially the api does is to create an interface so that two applications communicate 
or what a better discription would look like is a bridge between two pieces of software 
Also the api lets you interact with a database and let you fecth data that you are allowed 
every time we want to consume data we have to ask the api to give us the data we are searching for. In simpler terms the request is by sending a get request and the response is the data.

in coclusion the api makes you ask the correct question to retrieve the right data 


# architectual styles 
- there are plenty of architectual styles like rest:api, graphql, soap , grpc

it all depends in how you are going to style the api 

### Rest-Api 

The most important rule is that you interact with http protocol (get,put,patch,post,delete )
the api documentation is like an menu 
and then we make the request with http get 



## query parameters 
?query=value

we enter the query after the endpoint. This is basically the way to put a value key pair,
we can also add multiple we add & then the query 

what kind of activites we can pass : education,recreational,social,charity,cooking,relaxation,busywork
and we need to specify the particapants as well


# Path parameters 

the endpoint is a /parameter 
after the endpoint we can add a parameter 
endpoint/{path-parameter} which can be a username, a id 
if i want a special key i just specify it 

https://bored-api.appbrewery.com/activity/5914292 an api example 