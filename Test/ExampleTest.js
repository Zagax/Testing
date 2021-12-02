import { Selector } from 'testcafe';
import ExamplePage from '../Pages/ExamplePage';
import ThankYouPage from '../Pages/ThankYouPage';

fixture`ExampleTesting`
    .page`http://devexpress.github.io/testcafe/example`;

test
.skip
('Testing the name', async t => {
    // Test code
    ExamplePage.setName('Zagax Pulido');
    ExamplePage.submit();
    //Use the assertion to check if the actual header text is equal to the expected one
    await t
        .wait(5000)
        .expect(ThankYouPage.Header.innerText).eql('Thank you, Zagax Pulido!');
});

test
.skip
('Comment', async t=> {
    //Test code
    ExamplePage.setComment('Estoy Probando!');
    //Asserts
    await t
        .wait(5000)
        .expect(ExamplePage.Comments).contains('Estoy Probando!');
})

test
.skip
('Drag Slider', async t=>{
    //Test Code
    ExamplePage.selectSliderOption('10');
    await t
        .wait(5000);
})

test
.skip
('Clicking interface both', async t=>{
    ExamplePage.selectPreferredInterface(ExamplePage.both)
    await t
        .wait(5000)

})