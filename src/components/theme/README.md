## Theming component documentation

### AppTheme component

Component for making variables available for styling components using [_styled-components_](https://styled-components.com/docs/advanced)

#### Usage and props

In the main App component:

```
import { AppTheme } from 'src/components/theme';

<AppTheme>
  { /* components for the application */}
</AppTheme>
```

Then, in components styled with _styled-components_:

```
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: ${ props => props.theme.colours.dark }
  /* other styling properties */
`;
```

The following variables available in on the theme object:

```
{
  font: {
    family: 'Ubuntu, Helvetica, sans-serif',
  },
  colours: {
    grey: '#dddddd',
    brand: '#FF69B4',
    dark: '#111',
    light: '#fff',
  },
  border: {
    radius: '4px',
    transition: 'box-shadow 0.3s ease',
    shadow: '0 0 3px 3px rgba(255, 105, 180, 0.36)',
  },
  layout: {
    maxWidth: '568px',
  }
}
```
