import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`;

test
('Testing the name', async t => {
    // Test code
    await t
        //Testing area
        .typeText('#developer-name','Zagax Pulido')
        .click('#submit-button')

        //Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Zagax Pulido!');
});

test
('Comment', async t=> {
    //Test code
    await t
        .typeText('#developer-name','Zagax Pulido')
        .click('#tried-test-cafe')
        .typeText('#comments','Im loving it!')
        .drag('#slider', 720, 0, { offsetX: 5, offsetY: 5, speed: 0.5})
        .click('#submit-button')
        //Asserts
})