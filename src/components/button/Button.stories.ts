import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '.'
// import Loader from '../loader/Loader.vue'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="default"> Button </Button />'
  }),

  argTypes: {
    variant: {
      type: 'string',
      options: ['default', 'secondary', 'outline', 'destructive', 'ghost'],
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
    size: {
      type: 'string',
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
    class: {
      type: 'string'
    }
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="secondary"> Secondary Button </Button />'
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="outline"> Outline Button </Button />'
  })
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="ghost"> Ghost Button </Button />'
  })
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="destructive"> Destructive Button </Button />'
  })
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button variant="link"> Link  </Button />'
  })
}

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button isLoading="true"> Loading... </Button />'
  })
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default'
  },

  render: (args) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      }
    },
    template: '<Button disabled="true"> Disabled </Button />'
  })
}

// export const WithCustomIcon: Story = {
//   args: {
//     variant: 'default',
//     size: 'default',
//     icon: Loader,
//     iconClass: 'animate-spin'
//   },

//   render: (args) => ({
//     components: {
//       Button,
//       Loader
//     },
//     setup() {
//       return {
//         args
//       }
//     }
//   })
// }
