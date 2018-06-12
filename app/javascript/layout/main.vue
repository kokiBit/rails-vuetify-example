<template lang="pug">
  v-app
    v-navigation-drawer(:clipped="$vuetify.breakpoint.lgAndUp", v-model="drawer", fixed, app)
      v-list(dense)
        template(v-for="item in items")
          v-layout(v-if="item.heading", :key="item.heading", row, align-center)
            v-flex(xs6)
              v-subheader(v-if="item.heading") {{ item.heading }}
            v-flex(xs6).text-xs-center
              a(href="#!").body-2.black--text EDIT
          v-list-group(v-else-if="item.children", v-model="item.model", :key="item.text", :prepend-icon="item.model ? item.icon : item['icon-alt']", append-icon="")
            v-list-tile(slot="activator")
              v-list-tile-content
                v-list-tile-title {{ item.text }}
            v-list-tile(v-for="(child, i) in item.children", :key="i", @click="")
              v-list-tile-action(v-if="child.icon")
                v-icon {{ child.icon }}
              v-list-tile-content
                v-list-tile-title {{ child.text }}
          v-list-tile(v-else, :key="item.text", @click="")
            v-list-tile-action
              v-icon {{ item.icon }}
            v-list-tile-content
              v-list-tile-title {{ item.text }}
    v-toolbar(:clipped-left="$vuetify.breakpoint.lgAndUp", color="blue darken-3", dark, app, fixed)
      v-toolbar-title(style="width: 300px").ml-0.pl-3
        v-toolbar-side-icon(@click.stop="drawer = !drawer")
        span.hidden-sm-and-down BaseBall Analyze
      v-spacer
      v-btn(icon)
        v-icon  apps
      v-btn(icon)
        v-icon notifications
      v-btn(icon, large)
        v-avatar(size="32px", tile)
          img(src="https://vuetifyjs.com/static/doc-images/logo.svg", alt="Vuetify")
    v-content
      router-view
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' }
    ]
  }),
  props: {
    source: String
  }
}

</script>
