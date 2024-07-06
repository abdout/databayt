![NMBD Logo](/public/nmbd.png)

# NMBD

Welcome to the NMBD repository! This repository is owned by the National Movement for Building and Development, where its website and internal tools are maintained.

## Getting Started

To get started contributing to NMBD, follow these steps:

### Documentation 

To start with ease, you may browse the [Technical Record Document](https://github.com/abdout/nmbd/blob/main/TRD.md).  



### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/abdout/nmbd.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nmbd
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Setup .env file


```js
MONOGDB_URI=
DIRECT_URL=
AUTH_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_APP_URL=
DOMAIN=
```

5. Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

6. Run the development server:

    ```bash
    npm run dev
    ```

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the components.

### Contributing

We welcome contributions from the community! To contribute to Auth, please follow these guidelines:

1. Fork the repository
2. create a new branch for your feature or bug fix.
3. Ensure your code adheres to coding standards in TRD.
4. Test your changes locally.
5. Commit your changes and push them to your fork.
6. Open a pull request, describing the changes you've made and why they should be merged.

## Support

If you have any questions or need assistance, feel free to [open an issue](https://github.com/abdout/nmbd/issues) in the repository, or reach out to us on [Discord](https://discord.com/invite/uPa4gGG62c).

