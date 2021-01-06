# My home printer

### Story time!

My old and wireless printer has died. Oh crap.  
May he rest in peace (Or not, printers are our slaves after all)  
My father got a new printer, hooray! But f**\*** hell it is a wired printer :(  
And then I realized...  
![It's free real estate!](https://i.kym-cdn.com/photos/images/original/001/170/759/7c9.gif)  
Well... if a printer is wired, why can't I use my knowledge to make it wireless???  
Or even better! Not just wireless but I doesn't even need to install drivers on every computer that connects to the printer!  
So I made this little project in less than an hour, and now it runs on my home network on a Raspberry Pi which is connected to the printer with USB and serves the website on the local WiFi network.

Feel free to use this for your own purposes :)

In the server side I used NodeJS with [express.js](https://expressjs.com/), to send files I used [multer](https://github.com/expressjs/multer) and to print I used [node-printer](https://github.com/tojocky/node-printer).  
In the client side I used React with [MaterialUI](https://material-ui.com/)

![Follow me on twitter](https://img.shields.io/twitter/follow/realKfiros?style=social)

## Before you run the project

```bash
npm install
npm rebuild printer --build-from-source  # if you run on Windows you don't need to do this
```

## License

```
Copyright (c) 2021 Kfir Nevo
```

This project is licensed under the terms of the MIT license. See the [license](LICENSE) file.
