"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6782],{671:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/10/14/release-0-22","metadata":{"permalink":"/demo/ja/blog/2024/10/14/release-0-22","editUrl":"https://google.com/blog/2024-10-14-release-0-22.md","source":"@site/blog/2024-10-14-release-0-22.md","title":"Announcing Yew 0.22","description":"What\'s new","date":"2024-10-14T00:00:00.000Z","tags":[],"readingTime":1.86,"hasTruncateMarker":true,"authors":[{"name":"langyo","title":"Contributor of Yew","url":"https://github.com/langyo","imageURL":"https://github.com/langyo.png","key":"langyo","page":null}],"frontMatter":{"title":"Announcing Yew 0.22","authors":["langyo"]},"unlisted":false,"nextItem":{"title":"Announcing Yew 0.21","permalink":"/demo/ja/blog/2023/09/23/release-0-21"}},"content":"\x3c!--truncate--\x3e\\r\\n\\r\\n## What\'s new\\r\\n\\r\\n### SSR on WASI\\r\\n\\r\\nBefore Yew 0.22, server-side rendering (SSR) was only possible on the native target. With Yew 0.22, you can now render your Yew application on the WebAssembly System Interface (WASI) target.\\r\\n\\r\\nSince the old SSR implementation will create new tasks directly in the asynchronous context directly (based on `prokio`). It only allowed in a multi-threaded environment that it is not compatible with WASI. So the new version added a dedicated one for a single-threaded environment that rendering function to support single-threaded scenes.\\r\\n\\r\\nLearn more at [Server-side rendering example on WASI environment](https://github.com/yewstack/yew/tree/master/examples/wasi_ssr_module/src/main.rs)\\r\\n\\r\\n## Call for Contributors\\r\\n\\r\\nThe Yew project thrives on community involvement, and we welcome contributors with open arms. Whether you\'re an experienced Rust developer or just starting your journey, there are plenty of ways to get involved and make a meaningful impact on Yew\'s growth.\\r\\n\\r\\nHere are some areas where you can contribute:\\r\\n\\r\\n-   **Code Contributions:** If you\'re passionate about web development with Rust, consider contributing code to Yew. Whether it\'s fixing bugs, adding new features, or improving documentation, your code can help make Yew even better.\\r\\n\\r\\n-   **Documentation:** Clear and comprehensive documentation is vital for any project\'s success. You can contribute by improving documentation, writing tutorials, or creating examples that help others understand and use Yew effectively.\\r\\n\\r\\n-   **Testing and Bug Reporting:** Testing Yew and reporting bugs you encounter is a valuable contribution. Your feedback helps us identify and fix issues, ensuring a more stable framework for everyone.\\r\\n\\r\\n-   **Community Support:** Join discussions, chat rooms (we have our own Discord and Matrix!), or social media to assist other developers using Yew. Sharing your knowledge and helping others solve problems is a fantastic way to contribute.\\r\\n\\r\\nContributing to open-source projects like Yew is not only a way to give back to the community but also an excellent opportunity to learn, collaborate, and enhance your skills.\\r\\n\\r\\nTo get started, check out the Yew GitHub repository and the contribution guidelines. Your contributions are highly appreciated and play a crucial role in shaping the future of Yew. Join us in this exciting journey!\\r\\n\\r\\n## Thanks!\\r\\n\\r\\nMany people came together to create Yew 0.22. We couldn\'t have done it without all of you. Thanks!\\r\\n\\r\\nSee [the full changelog](https://github.com/yewstack/yew/blob/master/CHANGELOG.md)"},{"id":"/2023/09/23/release-0-21","metadata":{"permalink":"/demo/ja/blog/2023/09/23/release-0-21","editUrl":"https://google.com/blog/2023-09-23-release-0-21.md","source":"@site/blog/2023-09-23-release-0-21.md","title":"Announcing Yew 0.21","description":"The Yew development team is thrilled to unveil Yew 0.21.0, a significant milestone in the journey of empowering developers to create dependable and high-performance web applications with Rust.","date":"2023-09-23T00:00:00.000Z","tags":[],"readingTime":3.45,"hasTruncateMarker":true,"authors":[{"name":"Muhammad Hamza","title":"Maintainer of Yew","url":"https://github.com/ranile","imageURL":"https://github.com/ranile.png","key":"hamza","page":null}],"frontMatter":{"title":"Announcing Yew 0.21","authors":["hamza"]},"unlisted":false,"prevItem":{"title":"Announcing Yew 0.22","permalink":"/demo/ja/blog/2024/10/14/release-0-22"},"nextItem":{"title":"Releasing Yew 0.20","permalink":"/demo/ja/blog/2022/11/24/release-0-20"}},"content":"The Yew development team is thrilled to unveil Yew 0.21.0, a significant milestone in the journey of empowering developers to create dependable and high-performance web applications with Rust.\\r\\nLet\'s dive into the major highlights of this release.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## What\'s new\\r\\n\\r\\n### 1. Changing Signatures: A Shift in Hook Dependencies\\r\\n\\r\\nOne of the significant changes in Yew 0.21 is the adjustment to the signature of hooks that accept dependencies.\\r\\nDependencies used to be passed as the second argument after the closure. However, now they\'re passed as the first argument before the closure.\\r\\n\\r\\n```rust\\r\\nuse_effect_with_deps(deps, move |deps: Vec<i32>| {\\r\\n    // Do something with dependencies\\r\\n});\\r\\n```\\r\\n\\r\\nThe reason behind swapping the order of dependencies in the code snippet is to address a specific use case.\\r\\nIn situations where the same value is needed both to compute a dependency and to be moved by value into the closure, the new order simplifies the code and improves readability and ergonomics.\\r\\n\\r\\nThis is a big breaking change so we\'ve provided [a way to automate the refactor](https://yew.rs/docs/migration-guides/yew/from-0_20_0-to-0_21_0#automated-refactor)\\r\\n\\r\\n### 2. Versatile Child Types\\r\\n\\r\\nYew now allows you to use any type as children within your components. This means you\'re no longer limited to just the `Children` type.\\r\\nInstead, you can use any type, even `Html` or closures, unlocking patterns such as:\\r\\n\\r\\n```rust\\r\\nhtml! {\\r\\n    <Comp>\\r\\n        {|p: RenderProps| html!{<>{\\"Hello, \\"}{p.name}</>}}\\r\\n    </Comp>\\r\\n}\\r\\n```\\r\\n\\r\\n### 3. Agents: A Complete Rewrite\\r\\n\\r\\nYew 0.21 brings a complete rewrite of `yew-agent`. This streamlines and simplifies the way workers operate. Here\'s what you need to know:\\r\\n\\r\\n-   **Introducing Providers:** Say goodbye to the old `Worker::bridge()` method. Now, you can use the use `WorkerProvider` / `ReactorProvider` / `OneshotProvider` as per your need, by creating them using the hooks.\\r\\n\\r\\n-   **WorkerLink to WorkerScope:** We\'ve removed WorkerLink in favor of WorkerScope. This change simplifies the worker architecture, making it more straightforward to manage and maintain.\\r\\n\\r\\nThere are now 3 types of agents to be used, depending upon the situation:\\r\\n\\r\\n-   **Worker Agent:** The original agent that uses an actor model, designed to handle complex states.\\r\\n\\r\\n-   **Oneshot Agent:** Designed for scenarios where you expect a single input and a single output for each agent.\\r\\n\\r\\n-   **Reactor Agent:** Ideal for situations where multiple inputs and multiple outputs are needed for each agent.\\r\\n\\r\\nLearn more in [documentation of yew-agent](https://docs.rs/yew-agent/latest/yew_agent/)\\r\\n\\r\\n### 4. Performance Improvements: A Faster and Smoother Experience\\r\\n\\r\\nYew 0.21 brings substantial performance improvements. Your web applications will run faster and more efficiently, thanks to optimizations that reduce memory usage and enhance rendering.\\r\\n\\r\\n## Call for Contributors\\r\\n\\r\\nThe Yew project thrives on community involvement, and we welcome contributors with open arms. Whether you\'re an experienced Rust developer or just starting your journey, there are plenty of ways to get involved and make a meaningful impact on Yew\'s growth.\\r\\n\\r\\nHere are some areas where you can contribute:\\r\\n\\r\\n-   **Code Contributions:** If you\'re passionate about web development with Rust, consider contributing code to Yew. Whether it\'s fixing bugs, adding new features, or improving documentation, your code can help make Yew even better.\\r\\n\\r\\n-   **Documentation:** Clear and comprehensive documentation is vital for any project\'s success. You can contribute by improving documentation, writing tutorials, or creating examples that help others understand and use Yew effectively.\\r\\n\\r\\n-   **Testing and Bug Reporting:** Testing Yew and reporting bugs you encounter is a valuable contribution. Your feedback helps us identify and fix issues, ensuring a more stable framework for everyone.\\r\\n\\r\\n-   **Community Support:** Join discussions, chat rooms (we have our own Discord and Matrix!), or social media to assist other developers using Yew. Sharing your knowledge and helping others solve problems is a fantastic way to contribute.\\r\\n\\r\\nContributing to open-source projects like Yew is not only a way to give back to the community but also an excellent opportunity to learn, collaborate, and enhance your skills.\\r\\n\\r\\nTo get started, check out the Yew GitHub repository and the contribution guidelines. Your contributions are highly appreciated and play a crucial role in shaping the future of Yew. Join us in this exciting journey!\\r\\n\\r\\n## Thanks!\\r\\n\\r\\nMany people came together to create Yew 0.21. We couldn\'t have done it without all of you. Thanks!\\r\\n\\r\\nSee [the full changelog](https://github.com/yewstack/yew/blob/master/CHANGELOG.md)"},{"id":"/2022/11/24/release-0-20","metadata":{"permalink":"/demo/ja/blog/2022/11/24/release-0-20","editUrl":"https://google.com/blog/2022-11-24-release-0-20.md","source":"@site/blog/2022-11-24-release-0-20.md","title":"Releasing Yew 0.20","description":"The Yew team is happy to announce a new, long overdue, version of Yew: v0.20.","date":"2022-11-24T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/demo/ja/blog/tags/release"}],"readingTime":1.03,"hasTruncateMarker":true,"authors":[{"name":"Muhammad Hamza","title":"Maintainer of Yew","url":"https://github.com/ranile","imageURL":"https://github.com/ranile.png","key":"hamza","page":null}],"frontMatter":{"title":"Releasing Yew 0.20","authors":["hamza"],"tags":["release"]},"unlisted":false,"prevItem":{"title":"Announcing Yew 0.21","permalink":"/demo/ja/blog/2023/09/23/release-0-21"},"nextItem":{"title":"Hello Yew","permalink":"/demo/ja/blog/2022/01/20/hello-yew"}},"content":"The Yew team is happy to announce a new, long overdue, version of Yew: v0.20.\\r\\nYew is a framework for creating reliable and efficient web applications.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## What\'s new\\r\\n\\r\\nThis release comes with new features aimed at improving the user experience, such as server-rendering and render-as-you-fetch approach for data-fetching.\\r\\n\\r\\n### SSR\\r\\n\\r\\nYew now fully supports rendering on the server. Rendering on the server means users will get a rendered HTML and will not have to wait to be able to see anything until the entire WebAssembly bundle is downloaded and initial render has completed. With SSR, the page will be visible instantly, and interactable as soon as hydration finishes.\\r\\n\\r\\nLearn more at [Server-side rendering](/docs/advanced-topics/server-side-rendering)\\r\\n\\r\\n### Data fetching\\r\\n\\r\\nWith SSR comes new ways of data-fetching. The newly added [`use_prepared_state!`](https://api.yew.rs/next/yew/functional/macro.use_prepared_state.html) hook can be used to fetch data while rendering on the server and seemlessly use it in the component.\\r\\n\\r\\nFor client-side fetching, Yew now supports render-as-you-fetch approach with [Suspense](/docs/concepts/suspense).\\r\\n\\r\\n## How to upgrade\\r\\n\\r\\nThere have been breaking changes in this release. Our [migration guides](/docs/migration-guides/yew/from-0_19_0-to-0_20_0) go over how to upgrade each over of the new crates.\\r\\n\\r\\n## Thanks!\\r\\n\\r\\nMany people came together to help make this release happen. We couldn\'t have done it without all of you. Thanks!"},{"id":"/2022/01/20/hello-yew","metadata":{"permalink":"/demo/ja/blog/2022/01/20/hello-yew","editUrl":"https://google.com/blog/2022-01-20-hello-yew.md","source":"@site/blog/2022-01-20-hello-yew.md","title":"Hello Yew","description":"This is the first Yew blog post.","date":"2022-01-20T00:00:00.000Z","tags":[],"readingTime":0.11,"hasTruncateMarker":true,"authors":[{"name":"Muhammad Hamza","title":"Maintainer of Yew","url":"https://github.com/ranile","imageURL":"https://github.com/ranile.png","key":"hamza","page":null}],"frontMatter":{"title":"Hello Yew","authors":["hamza"]},"unlisted":false,"prevItem":{"title":"Releasing Yew 0.20","permalink":"/demo/ja/blog/2022/11/24/release-0-20"}},"content":"This is the first Yew blog post.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nYew is a modern Rust framework for creating multi-threaded front-end web apps with WebAssembly."}]}}')}}]);