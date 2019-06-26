export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d136fd0cfdfac605d4aa6e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zyho5buk',
                  apiId: '4a7be50e-1ecd-43d5-b287-7b16c78e7a37'
                },
                {
                  buildHookId: '5d136fd024dbf4e04055563c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7eyr9uh3',
                  apiId: 'e9d62b83-e208-4092-8147-9baa3a25dec4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bharathibtch/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7eyr9uh3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
