it('Demonstrates Route Stubbing', () => {
  // https://conduit.productionready.io/api/tags

  cy.server();
  cy.route('https://conduit.productionready.io/api/tags*', responseFunc);

  cy.visit('https://angular.realworld.io/');

  // cy.request('https://conduit.productionready.io/api/tags', (data) => {
  //   console.log('===> ', data);
  // });

  // cy.request('https://conduit.productionready.io/api/tags');
});

const responseFunc = (routeData) => {
  //  routeData is a reference to the current route's information
  return {
    data: testFunc(routeData),
  };
};

function testFunc(routeData) {
  // alert(routeData);
  return { value: 'What up from the inside!' };
}

it.only('Demonstrates Route Stubbing', () => {
  // https://conduit.productionready.io/api/tags

  cy.server();
  cy.route('GET', '**/api/articles*', { val: 'test', moreVal: 'more test' }).as(
    'articles'
  );

  cy.visit('https://angular.realworld.io/');
  cy.wait('@articles');
});

it('Simulates Redirect', () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '**/api/articles*',
    response: {
      // simulate a redirect to another page
      // redirect: '/error',
      val: 'test',
      moreVal: 'more test',
    },
  });

  cy.visit('https://angular.realworld.io/');
});
