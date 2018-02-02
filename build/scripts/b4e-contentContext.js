/* Compile commands:
 * handlebars build/templates -f dist/scripts/hbs-templates.js -e 'hbs'
 * handlebars build/templates -f dist/scripts/hbs-templates.min.js -m -e 'hbs'
 */

const CONTENT = {
    sectionContent: [
        {
            sectionId: 'section-font',
            sectionTitle: 'Font Families, Weights and Styles',
            cardContent: [
                {
                    cardId: 'card-font-families',
                    cardTitle: 'Font Families'
                },
                {
                    cardId: 'card-font-weights',
                    cardTitle: 'Font Weights'
                },
                {
                    cardId: 'card-font-styles',
                    cardTitle: 'Font Styles'
                }
            ]
        },
        {
            sectionId: 'section-text',
            sectionTitle: 'Text Decorations and Transforms',
            cardContent: [
                {
                    cardId: 'card-text-decorations',
                    cardTitle: 'Text Decorations'
                },
                {
                    cardId: 'card-text-transform',
                    cardTitle: 'Text Transforms'
                }
            ]
        },
        {
            sectionId: 'section-color',
            sectionTitle: 'More Colors',
            cardContent: [
                {
                    cardId: 'card-color-text',
                    cardTitle: 'Text'
                },
                {
                    cardId: 'card-color-bg',
                    cardTitle: 'Background'
                },
                {
                    cardId: 'card-color-border',
                    cardTitle: 'Border'
                },
                {
                    cardId: 'card-color-card',
                    cardTitle: 'Cards'
                }
            ]
        }
    ]
};