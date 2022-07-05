import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import theme from '../theme';

export function ThemeColorsStory() {
  const colorNames = Object.keys(theme.colors);
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <ul style={{ padding: 0 }}>
        {colorNames.map((colorName) => {
          return (
            <li style={{
              listStyle: 'none',
              display: 'block',
              marginBottom: '30px',
              border: '1px solid #ddd',
              padding: '16px',
              borderRadius: '8px'
            }}>
              <h1>
                {colorName}
              </h1>
              <h3>
                theme.colors.{colorName}
              </h3>

              <div style={{ display: 'grid', border: '1px solid #ddd', }}>
                {Object.keys(theme.colors[colorName]).map((colorTypeName) => {
                  const background = colorTypeName !== 'text'
                    ? theme.colors[colorName][colorTypeName]
                    : theme.colors[colorName][colorTypeName].main;
                  const color = theme.colors[colorName][colorTypeName].text;
                  return (
                    <div style={{ background, color: color, padding: '16px' }}>
                      <h2 style={{ marginTop: '0' }}>{colorTypeName}</h2>
                      <p>theme.colors.{colorName}.{colorTypeName}</p>
                      {background}
                    </div>
                  )
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
