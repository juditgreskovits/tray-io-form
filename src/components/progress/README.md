## Progress components documentation

### PageTitle component

Component for displaying the title of the page.

- styled differently if it's the current page's title (active)

#### Usage and props

```
import { PageTitle } from 'src/components/progress';

<PageTitle
  title={title}                         // title to display
  active={ true | false }               // display title as active
/>
```

---

### PageHeader component

Component for laying out the titles.

#### Usage and props

```
import { PageHeader } from 'src/components/progress';

<PageHeader>
  {children}
</PageHeader>
```
