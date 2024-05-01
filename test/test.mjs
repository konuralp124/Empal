// test.mjs
import assert from 'assert';
import request from 'supertest';   
import {Builder, By} from 'selenium-webdriver'; 
import app from '../app.mjs'; 

// Mocha%Supertest one research topic -> 4 tests
//Mocha%Selenium another research topic both approved by the professor ->6 test
//in total-> 10 tests
// each test is passing but sometimes ping problems occur, which makes tests fail.

// { Builder, By, Key, until }

const port= process.env.PORT || 3000;

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
const randomString = generateRandomString(10);
const randomString1= generateRandomString(10);
describe('User Registration and Login; Cheking Form Validity Using Supertest', function () {
  it('checking form validity: forms should be able to register a new user in general, using Supertest', async function () {
    
    const response = await request(app)
      .post('/')
      .type('form')
      .send({ action: 'register', username: randomString, password: 'testpassword' });

    assert.strictEqual(response.status, 302); // Assuming successful registration redirects
    assert.strictEqual(response.header.location, `/u/${randomString}`); // Assuming redirection to user profile
  });

  it('forms should login an existing user, Supertest', async function () {
    const response = await request(app)
      .post('/')
      .type('form')
      .send({ action: 'login', username: `${randomString}`, password: 'testpassword' });

    assert.strictEqual(response.status, 302); // Assuming successful login redirects
    assert.strictEqual(response.header.location, `/u/${randomString}`); // Assuming redirection to user profile
  });

  it('forms should handle incorrect login credentials, Supertest', async function () {
    const response = await request(app)
      .post('/')
      .type('form')
      .send({ action: 'login', username: `${randomString}`, password: 'incorrectpassword' });

    assert.strictEqual(response.status, 200); // Assuming login failure returns status 200
    assert.strictEqual(response.text.includes('incorrect password'), true); // Assuming error message is displayed
  });


});

describe('Home Page Forms Display In the Route for Chrome, Selenium', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('home page should display login and registration forms in Chrome, Selenium is used', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    let usernameField = await driver.findElement(By.name('username'));
    let passwordField = await driver.findElement(By.name('password'));
    let registerButton = await driver.findElement(By.css('[value="register"]'));
    let loginButton = await driver.findElement(By.css('[value="login"]'));

    assert(usernameField.isDisplayed() && passwordField.isDisplayed());
    assert(registerButton.isDisplayed() && loginButton.isDisplayed());
  });

  after(async function () {
    await driver.quit();
  });
});


describe('Registration and Login Process in the Chrome-user Interaction, Including What The User Sees on the Page, Using Selenium', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should register a new user through browser(Chrome) interaction using Selenium, and then check if everything wanted is being displayed on the page', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    await driver.findElement(By.name('username')).sendKeys(`${randomString1}`);
    await driver.findElement(By.name('password')).sendKeys('newpassword');
    await driver.findElement(By.css('[value="register"]')).click();

    let currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, `http://linserv1.cims.nyu.edu:${port}/u/${randomString1}`); 

  });

  it('should login an existing user through browser(Chrome) interaction using Selenium', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    await driver.findElement(By.name('username')).sendKeys(`${randomString1}`);
    await driver.findElement(By.name('password')).sendKeys('newpassword');
    await driver.findElement(By.css('[value="login"]')).click();

    let currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, `http://linserv1.cims.nyu.edu:${port}/u/${randomString1}`); 
  });

  after(async function () {
    await driver.quit();
  });
});

describe('User Profile if The User Logged In, Selenium', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    await driver.findElement(By.name('username')).sendKeys(`${randomString1}`);
    await driver.findElement(By.name('password')).sendKeys('newpassword');
    await driver.findElement(By.css('[value="login"]')).click();
  });

  it('should show the form for updating email and bio', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}/u/${randomString1}`);
    let links= await driver.findElement(By.tagName('li'))
    let emailField = await driver.findElement(By.name('email'));
    let bioField = await driver.findElement(By.name('bio'));
    let updateButton = await driver.findElement(By.id('updateButton'));

    assert(emailField.isDisplayed() && links.isDisplayed() && bioField.isDisplayed() && updateButton.isDisplayed());
  });

  after(async function () {
    await driver.quit();
  });
});

describe('Update Profile and Check Visibility of The Updated Values in Chrome, Selenium', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    await driver.findElement(By.name('username')).sendKeys(`${randomString1}`);
    await driver.findElement(By.name('password')).sendKeys('newpassword');
    await driver.findElement(By.css('[value="login"]')).click();
  });

  it('should update the user email and bio and make them visible', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}/u/${randomString1}`);
    await driver.findElement(By.name('email')).sendKeys('newemail@example.com');
    await driver.findElement(By.name('bio')).sendKeys('Updated bio information');
    await driver.findElement(By.id('updateButton')).click();

    let currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, `http://linserv1.cims.nyu.edu:${port}/u/${randomString1}`);
    let emailDiv=await driver.findElement(By.id('email'));
    let bioDiv=await driver.findElement(By.id('bio'));
    let email= await emailDiv.getText();
    let bio=await bioDiv.getText();

    assert.strictEqual(email, 'newemail@example.com');
    assert.strictEqual(bio, 'Updated bio information');

  });

  after(async function () {
    await driver.quit();
  });
});

describe('Add Recipe Page Display, Selenium', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(`http://linserv1.cims.nyu.edu:${port}`);
    await driver.findElement(By.name('username')).sendKeys(`${randomString1}`);
    await driver.findElement(By.name('password')).sendKeys('newpassword');
    await driver.findElement(By.css('[value="login"]')).click();
  });

  it('should display add recipe form in Chrome', async function () {
    await driver.get(`http://linserv1.cims.nyu.edu:${port}/add`);
    let titleField = await driver.findElement(By.name('title'));
    let descriptionField= await driver.findElement(By.name('description'));
    let ingredientsField= await driver.findElement(By.name('ingredients'));
    let preparationStepsField=await driver.findElement(By.name('preparationSteps'));
    let categoryField=await driver.findElement(By.name('category'));
    let tagsField= await driver.findElement(By.name('tags'));
    
    assert(titleField.isDisplayed() && descriptionField.isDisplayed() && ingredientsField.isDisplayed() && preparationStepsField.isDisplayed() && categoryField.isDisplayed() && tagsField.isDisplayed());
 
  });

  after(async function () {
    await driver.quit();
  });
});

describe('Add Recipe Functionality of The Form, Supertest', function() {
  it('should add a new recipe', async function() {
    const response= await request(app)
      .post('/add')
      .type('form')
      .send({ title: 'New Recipe', description: 'Delicious food!', ingredients:'Broccoli', preparationSteps: 'Bake for 10 mins', category: 'Vegie', tags: 'Vegie, Healthy'});
      assert.strictEqual(response.status, 302);
  });
});









