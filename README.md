Konuralp Sarisozen

## Overview

Empal: a communication platform for patients with chronical diseases 

# Description
Living with a health condition can often make it seem like finding others facing similar challenges is a rare occurrence. If the isolation of dealing with your health struggles has left you feeling alone, you might be inclined to seek avenues to connect with individuals who share your specific health condition - which is exactly where Empal comes into play. Empal is not just a web based platform; it is a lifeline for those navigating the complexities of chronic health conditions. By fostering connections, a sense of community, sharing experiences, providing valuable resources, and enhancing accessibility to healthcare professionals, Empal strives to make a meaningful impact on the well-being of its usersbase.
# Key Features Implemented Until Now
- User Authentication
- Terms and Conditions
- Email Sending for Account Verification for Healtcare Professionals
- Different Registration for Healthcare Professionals in Order To Comply With the UAE Laws; they should be verified by content moderators first
- Posting
- Commenting
- Messaging
- Personalized Feed according to the patient's condition and healthcare professional's expertise and area of interests. 
- User Profiles (blue check if healthcare professional)

# Use Cases
1.1. Personalized Content Delivery for User Health Management
Description: This use case scenario describes how Empal delivers personalized health-related content to users based on their health profiles, preferences, and interaction history. The scenario begins when a user accesses the platform and ends when the user receives personalized content recommendations.
Actors:
Primary Actor: Registered User
Preconditions:
● The user must be registered and logged into Empal.
● The user's health profile must be complete and up-to-date.
● Healthcare professionals have contributed articles and content to the CMS.
Postconditions:
The user receives personalized content recommendations that match their health profile and interests.
Main Flow:
● The user logs into their Empal account.
● The system retrieves the user's health profile and interaction history.
● The Personalization Engine analyzes the user's data to identify relevant content topics
and preferences.
● The system queries the CMS for content matching the identified topics and preferences.
● The CMS returns a list of relevant articles and content.
● The Personalization Engine curates and ranks the content based on relevance to the user's
health profile.
● The system displays personalized content recommendations to the user.
● The user interacts with the content (e.g., reads articles, watches videos).
Alternative Flows:
● If the user's health profile is incomplete or outdated, the system prompts the user to update their health information.
● If no content matches the user's preferences, the system suggests general wellness content or prompts the user to adjust their preferences.
 1.2. Register as Medical Health Professional
Description: This use case scenario describes how a medical health professional registers on the Empal platform, providing necessary credentials and personal information. The scenario starts when the professional initiates the registration process and ends when their account is verified and activated.
Actors:
● Primary Actor: Medical Health Professional
● Secondary Actors: Moderators, System, Users Stakeholders and Interests:
● Medical Health Professional: Seeks to contribute professional advice, engage in forums, manage groups within their expertise, and contribute to webinars.
● Moderators: Ensures the accuracy and legitimacy of the credentials of the professionals.
● System: Aims to ensure the authenticity and reliability of medical information provided
on the platform.
● Users: Seek professional medical advice and support.
Preconditions:
● The actor must have valid medical credentials. Postconditions:
● The medical health professional's account is verified and active.
Main Success Scenario:
1. User initiates the use case by selecting the option to register as a healthcare professional.
2. The app displays an application form asking for the user's education, experience, and area of expertise.
3. User fills out the form and submits it for evaluation.

 4. The app displays Terms and Conditions specific to healthcare professionals, including minimum monthly productivity and payment procedures.
5. User reads and accepts the Terms and Conditions.
6. The app confirms the submission of the application and informs the user that they
will receive an email with initial login credentials upon approval.
7. Call Use Case: Evaluation of Healthcare Professional Register Applications to
trigger the evaluation of the application by the content moderators.
8. User logs in and completes the setup of their professional profile.
Special Requirements:
● Data Security: The system ensures all submitted credentials and personal information are encrypted and stored securely, complying with UAE laws for data protection and industry standards.
● Technology and Data Variations List:
● Frequency of Occurrence: A few times weekly, as new professionals seek to join the
platform.

 1.3. Use Case Name: Send Direct Message
Description: This use case scenario outlines the process by which users of the Empal Web Application send direct messages to communicate privately with other users or medical health professionals. It begins when a registered user initiates the action to send a message and ends when the message is successfully delivered to the intended recipient.
Scope: Empal Web Application Level: Subfunction
Actors
● Primary Actor: User
● Secondary Actor: Notification system
Stakeholders and Interests:
● Sender: A user who desires to privately communicate with others.
● Recipient: Users or medical health professionals who may wish to receive messages
from individuals facing similar situations.
● System: Aims to facilitate secure and private communication between users.
Preconditions:
● Both the sender and recipient are registered and logged in to the Empal platform. Postconditions:
● A private message is successfully sent to the intended recipient. Main Success Scenario:
1. The user navigates to the profile of the recipient.
2. The user clicks on the "Send Message" button.
3. The user composes a message and sends it.

 4. The system notifies the recipient that a request to message has been sent to them.
5. The recipient accepts the request.
6. The system delivers the message to the recipient.
Extensions:
5a. The recipient has declined direct messaging.
6a. The system notifies the sender that messaging has been declined.
1.4. Use Case Name: Permanent Account and Data Deletion
Description: This use case scenario describes the process by which a registered user deletes their account on the Empal platform permanently, including the associated data. It begins when a user initiates the account deletion process and ends when the user receives confirmation that their account and data have been permanently deleted.
● Use Case Name: Permanent Account and Data Deletion
● Scope: Empal Web Application
● Level: Subfunction
● Primary Actor: User – Registered user seeking to delete their account.
● Actors: System
Main Success Scenario:
1. The user logs into their account using their credentials.
2. The user navigates to the "Account Settings" section within their profile dashboard.
3. The user selects the "Delete Account" option.
4. The system retrieves user data and displays a warning message outlining the
consequences of account deletion, including permanent data loss.
5. The user confirms their intention to delete the account by entering their password and
selecting a reason for account deletion from a predefined list.

6. The system processes the deletion request, permanently removes the user's account and associated data, and logs the user out.
7. The system sends a confirmation email to the user's registered email address, confirming the account and data have been permanently deleted.
Extensions:
5.a. User decides to cancel the deletion process after reading the warning message.
● User selects the "Cancel" option, and the system returns them to the "Account Settings" without making any changes.
1.5. Use Case Name: User Contributes to Discussion Forum with Text and Image
Description: This use case scenario describes how a logged-in and active user with an active account contributes to a discussion forum on the Empal platform by submitting text and accompanying images. It begins when the user logs into their account and ends when the user's contribution is successfully posted to the discussion thread.
Use Case Name: User Contributes to Discussion Forum with Text and Image Scope: Empal Web Application
Level: Subfunction
Primary Actor: User – Logged-in and active user with an active account Main Success Scenario:
1. The user logs into their account through the homepage portal by providing their account name and password.
2. The system retrieves the user's account information and presents the user with their updated and customized feed.

3. The user views available online communities and selects the desired community by name.
4. The user is shown the current running discussion thread and the space to enter their input.
5. The user inputs text of choice accompanied by an image and a link to a reference website
and submits.
6. The system retrieves the information submitted, then posts it to the main thread with the
user's credentials and notifies a selected moderator.
7. The moderator reviews the post within a 24-hour period and provides positive
verification that the post is within community guidelines.
Extensions:
7a. The assigned moderator reviewing the post deems that the post does not uphold community standards.
7b. The system deletes the post from the main discussion thread.
7c. The user is notified of the post's violation of community guidelines.
