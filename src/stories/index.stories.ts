import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from '../app/components/task/task.component';

import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { CardComponent } from '../app/components/simple-card/simple-card.component';
import { TestComponent } from '../app/components/test/test.component';
import { StorybookTestComp } from 'src/app/components/storybooktestComp/sb-test.component';
import { DemoButtonComponent } from 'src/app/components/demo-button/demo-button.component';

import imageFile from '../assets/testimage.png';


export const task = {
  id: '1',
  title: 'Hello world',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'), //actions allow us to create callbacks and create the effect of interacting with the interface. Its convinent to bundle the actions to reuse later.
  onArchiveTask: action('onArchiveTask'),
};


storiesOf('Task', module) //iniates storybook and gives the story a name (for the sidebar in the browser)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
    }),
  )
  .add('default', () => {//add is called for each of the test states for the story. Each differnet version is an .add()
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('pinned', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('archived', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  });


//from tutorial https://alligator.io/angular/storybook-angular/ 
storiesOf('Card', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent],
    })
  )
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with title', () => (
    {
      template: `<app-card [title]=title></app-card>`,
      notes: 'Hello world',
      component: CardComponent,
      props: {
        title: 'Hello cards!'
      }
    }))
  .add('with title and subtitle', () => (
    {
      template: `<app-card [title]=title [subtitle]=subtitle></app-card>`,
      component: CardComponent,
      props: {
        title: 'Hello card!',
        subtitle: 'Well hello there 👋'
      }
    }))
  .add('with action', () => (
    {
      template: `<app-card [title]=title [subtitle]=subtitle></app-card>`,
      component: CardComponent,
      props: {
        title: 'A card...',
        subtitle: 'Waiting to be clicked-on',
        btnClicked: action('👊 Button was clicked')
      }
    }));

// let's nest a story into our main `Card` stories
storiesOf('Card/nested', module).add('special card', () => ({
  component: CardComponent,
  props: {
    content: "I'm a card in a nested story!"
  }
}));

// end that tutorial. 

/* default stories */

/*storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => (
    {
      component: Button,
      props: {
        text: 'Hello Button',
      },
    }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
*/


storiesOf('Test stories', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TestComponent, StorybookTestComp],
    })
  )
  .add('Button with nothing', () => (
    {
      template: `
      <app-test 
      [h1Content]=sbVarH1>
      [htmlDynamic]=sbDynamicHTML
      </app-test>`,
      component: TestComponent,
      props: {
        sbVarH1: 'First test',
        sbDynamicHTML: 'This is inserted dynamically in storybook'
      },
    }),
    { notes: 'first test with only title been changed, rest is default. ' }
  )

  .add('Button with custom text', () => (
    {
      template: `<app-test [buttonText]=buttonText [h1Content]=sbVarH1></app-test>`,
      component: TestComponent,
      props: {
        sbVarH1: 'Heading 1 for 2nd test',
        buttonText: 'Test button click here',
        onClick: action('Button clicked'),
      },
      styles: [
        `
      button {
        color: red;
        }
    `,
      ],
    }))
  .add('Button hover', () => (
    {
      template:
        `<app-test [buttonText]=buttonText></app-test> <p style="color: red">
        addtional content can go here along with styling but it cant effect the imported content.</p>`,
      component: Button,
      props: {
        sbVarH1: 'Heading 1 for 3nd test',
        buttonText: 'Test button hover effect',
        onClick: action('Hover button clicked'),
      },
      styles: [
        `
      button:hover {
        color: blue;
        }
    `,
      ],
    }))
  .add('Rogue component', () => (
    {
      template: `
        <style>
            .rogue {
              background: red; 
              width:50em;
              height:50em;
              color:white;
              text-align: center;
            }
        </style>

        <div class="rogue">
          <h1>Rouge component</h1>
          <p>has no angular components linked to it, it exists purely here.</p>
        </div>
        `
    }))
  /*component with no html file all from TS then converted back to HTML.*/
  .add('Special HTML component', () => (
    {
      template: `<sb-test-comp [interpolationContent]=sbtitle></sb-test-comp>`,
      props: {
        sbtitle: "Title Inserted in storybook"
      },
    }))
  ;

storiesOf('Story of buttons', module)
  .addDecorator(
    moduleMetadata({
      declarations: [DemoButtonComponent],
    })
  )
  .add('Button default', () => (
    {
      template: `<app-demo-button [btnText]=text></app-demo-button>`,
      component: DemoButtonComponent,
      props: {
        text: 'Default button',
      },
    }),
    { notes: 'no notes ' }
  )
  .add('Many buttons', () => (
    {
      template: `
      <style>
            .disabled {
              background: var(--ion-color-medium) !important;
              color: #4a4a4a;
              cursor: not-allowed;
            }

            .successbtn {
              background: var(--ion-color-success) !important;
            }

            .dangerbtn {
              background: var(--ion-color-danger) !important;
              cursor: crosshair;
            }
        </style>
      
      <div>
      <button class="storyOfButtons">Regular button</button>
      <button class="disabled storyOfButtons">Disabled button</button>
      <button class="successbtn storyOfButtons">Proceed</button>
      <button class="dangerbtn storyOfButtons">Dont click!</button>
      </div>
      `,
      component: DemoButtonComponent,
      props: {
      }
    }),
    { notes: 'no notes ' }
  )