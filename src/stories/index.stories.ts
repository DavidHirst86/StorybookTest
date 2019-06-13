import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from '../app/components/task/task.component';

import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { CardComponent } from '../app/components/simple-card/simple-card.component';
import { TestComponent } from '../app/components/test/test.component';

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
      declarations: [TestComponent],
    })
  )
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add(
    'with title',
    () => (

      {
        notes: 'Hello world',
        component: CardComponent,
        props: {
          title: 'Hello card!'
        }
      }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'Well hello there 👋'
    }
  }))
  .add('with action', () => ({
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

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
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



storiesOf('Tab 2', module).add('The story 2 tab', () => ({
  component: TestComponent,
  props: {},
}));