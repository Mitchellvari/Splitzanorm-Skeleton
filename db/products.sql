CREATE TABLE products (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text,
    description text,
    price integer
);



INSERT INTO "public"."products"("name", "description", "price") VALUES('Coffee Machine', 'Produce delicious cafe-style coffee even at the comfort of your home using this sleek Sunbeam Barista Max Plus Espresso Machine. This all-in-one coffee machine integrates a stainless steel conical burr grinder and an intuitive digital screen for seamless operations. Now you can kickstart your mornings with a sip of your freshly made coffee!', 55) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Furbo Dog Camera', 'Communicate with your dogs and send them treats all in one with the Furbo dog camera. It comes with a free app for your phone and will even send you push notifications (if you want) when your dog is barking.', 25) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Nakamichi High End Cinema Surround', 'Turn your TV area into a cinematic surround sound with this set up from Nakamichi. This will take any entertainment area up another level.', 45) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Native Union Dock Wireless Charger Stand', 'Charge your phone without having to deal with unsightly or tangled cords. This docking station by Native Union works with most newer phone models, but check compatibility first before buying.', 30) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Portronics POR-704 Adjustable Laptop Cooling Table', 'Need to run a lot of applications at once on your computer? This multi utility cooler desk is a great option for keeping your laptop from overheating while also providing a convenient work station.', 43) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Cordless Vacuum Sealer Machine', 'Keep food fresher longer with this cordless vacuum sealer by ERKIU. Its battery-powered design makes it easy to stow away and pull out whenever needed without having to find an available outlet.', 55) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Echo Link', 'Stream hi-fi music to your stereo system with the Echo Link. It allows for voice control music selection and playback with your compatible Echo device or the Alexa app.', 38) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('Logitech C270 HD Webcam', 'If you use webcams at home for work, school or something else, an HD webcam is a great choice.  This webcam by Logitech allows for 1080p recording and comes at an affordable price.', 40) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('LumiLux Toilet Light with Motion Detection Sensor', 'No more fumbling in a dark bathroom at night. The LumiLux Toilet Light has motion detectors to sense when it’s time for the lights to come on. Plus, how cool do they look?', 45) RETURNING "id", "name", "description", "price";
INSERT INTO "public"."products"("name", "description", "price") VALUES('USB Official OEM Charger and Power Adapter', 'Easily charge your Fire Tablets and Kindle eReaders without having to look where you last put your cord with the OEM charger. See why nearly 25,000 Amazon reviewers aren’t wrong.', 25) RETURNING "id", "name", "description", "price";
