import {defineField, defineType} from 'sanity'

export const postType = defineType({
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
                defineField({
                        name: 'title',
                        type: 'string',
                        validation: (rule) => rule.required(),
                }),
                defineField({
                        name: 'slug',
                        type: 'slug',
                        options: {source: 'title'},
                        validation: (rule) => rule.required(),
                }),
                defineField({
                        name: 'featured',
                        type: 'boolean',
                        title: 'Featured post',
                        initialValue: false,
                }),
                defineField({
                        name: 'category',
                        type: 'string',
                        title: 'Category',
                        options: {
                                list: [
                                        {       
                                                title: 'E-Books and Guides', 
                                                value: 'ebooks-guides' 
                                        },
                                        {       
                                                title: 'Templates and Toolkits', 
                                                value: 'templates-toolkits' 
                                        },
                                        {       
                                                title: 'Online Courses', 
                                                value: 'online-courses' 
                                        },
                                ],
                        },
                        validation: (rule) => rule.required(),
                }),
                defineField({
                        name: 'publishedAt',
                        type: 'datetime',
                        initialValue: () => new Date().toISOString(),
                        validation: (rule) => rule.required(),
                }),
                defineField({
                        name: 'image',
                        type: 'image',
                }),
                defineField({
                        name: 'body',
                        type: 'array',
                        of: [
                                {type: 'block'},
                                {
                                        type: 'image',
                                        options: {
                                                hotspot: true,
                                        },
                                        fields: [
                                                defineField({
                                                        name: 'alt',
                                                        type: 'string',
                                                        title: 'Alternative text',
                                                        description: 'Important for accessibility and SEO'
                                                }),
                                        ],
                                },
                        ],
                }),
                defineField({
                        name: 'commentsEnable',
                        type: 'boolean',
                        title: 'Enable comments',
                        initialValue: true,
                }),
                defineField({
                        name: 'relatedPosts',
                        type: 'array',
                        of: [{
                                type: 'reference',
                                to: [{
                                        type: 'post'
                                }]
                        }],
                        title: 'Related posts',
                }),
        ],
})