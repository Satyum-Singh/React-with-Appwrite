import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/",
    }),
    tagTypes:["Posts"],
    endpoints:(builder)=>({
        // Query is used for getting all the posts
        getPosts:builder.query<Post,string>({query:()=>"posts", providesTags:["Posts"] }),

        // Mutation is used for deleting, updating, adding posts
        newPost:builder.mutation<Post,Post>({
            query:(post)=>({
                url:"posts",
                method:"POST",  
                body:post,
            }),
            invalidatesTags:["Posts"],
        }),
    }),
});

export const { useGetPostsQuery, useNewPostMutation } = api