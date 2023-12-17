This is Repo written using clean code principles which allows users to join waitlist for a product or service as well send suggesting message to the service team.

# Folder Structure
## App
This contains all the files required for initialising the server, i.e configuring the routes, subscribing to the message queue in this case Apache Kafka.

## [Modules](src/modules)
This is where the business logic for each module lives. I applied bounded context to seperate the app into independent modules based on their responsibility.

### Email Module
This handles all the logic for dispatching a mail. It listens to topics in the message queue for users joining the waitlist or users sending suggestion messages and performs the appopriate actions based on the topic.
