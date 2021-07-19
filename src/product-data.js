const products = [
    {
        id:1,
        name: 'Drone-1',
        productType: 'Drone especiales 2021',
        price: 15000,
        rating: 4,
        image: 'https://cadenaser00.epimg.net/ser/imagenes/2017/11/30/ciencia/1512057326_099663_1512057419_noticia_normal.jpg',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:2,
        name: 'Drone sport',
        productType: 'Drone-2020',
        price: 11000,
        rating: 4,
        image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200_amp/public/media/image/2018/12/consejos-guia-comprar-dron_3.jpg?itok=D0-ZOt4b',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:3,
        name: 'Drone-Acuatis',
        productType: 'Drone especiales acuaticos-2021',
        price: 25000,
        rating: 4,
        image: 'https://th.bing.com/th/id/OIP.xsKYJ5zq2I4jMp-AEM_3dQHaEj?pid=ImgDet&rs=1',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:4,
        name: 'Drone-TIII',
        productType: 'Drone- 2019',
        price: 9000,
        rating: 2,
        image: 'https://th.bing.com/th/id/OIP.OJmNws6ZPuPdBWPVSOT-qQHaE8?pid=ImgDet&rs=1',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:5,
        name: 'Drone-prueba',
        productType: 'Drone especiales 2020',
        price: 15000,
        rating: 4,
        image: 'https://cdn.vox-cdn.com/thumbor/XgbAoD7VW4qqxAlyMXs_frNUS38=/0x175:3500x2144/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47776073/GettyImages-473398678.0.jpg',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:6,
        name: 'Drone-suelo',
        productType: 'Drone especiales 2021',
        price: 35000,
        rating: 5,
        image: 'https://th.bing.com/th/id/OIP.mJ-DFXB7MoeXfi82D4zeXgHaE8?pid=ImgDet&rs=1',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:7,
        name: 'Drone-film',
        productType: 'Drone cientifico 2021',
        price: 55000,
        rating: 3,
        image: 'https://th.bing.com/th/id/OIP.T9IZXaC771cGar79gwONDAHaE6?pid=ImgDet&rs=1',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:8,
        name: 'Drone-camara',
        productType: 'Drone especiales  experimento 2021',
        price: 45000,
        rating: 6,
        image: 'https://www.suasnews.com/wp-content/uploads/2013/06/event38hexacopter.png',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",

    },
    {
        id:9,
        name: 'Drone-DHL',
        productType: 'Drone especiales uso comercial 2021',
        price: 65000,
        rating: 4,
        image: 'https://th.bing.com/th/id/OIP.3LKfBmmoLSb7lPot0MeNqQHaEK?pid=ImgDet&rs=1',
        description:  "Imágenes gratis de Drones. Imágenes relacionadas: ANAC autoriza este metodos para entrega de produtos com drones ....",

    },
    {
        id:10,
        name: 'Drone-DHL1',
        productType: 'Drone especiales uso comercial 2021',
        price: 95000,
        rating: 4,
        image: 'https://th.bing.com/th/id/R4aa02eea8a3e8875e781e5e6525309d4?rik=c8u%2brQIFbs1WKA&pid=ImgRaw',
        description:  "Imágenes de Drones. Imágenes relacionadas: drone usados en correo de dificil accesos( montañas, bosques, lugunas , pantanos).",

    },
    {
        id:11,
        name: 'Drone-CRR',
        productType: 'Drone especiales para uso comercial',
        price: 150000,
        rating: 6,
        image: 'https://th.bing.com/th/id/OIP.4CFwGOvHKH58AHtBrjUcGQHaEK?pid=ImgDet&rs=1',
        description:  "Imágenes de Drones. Imágenes relacionadas: Drones comenzaranam a entregar bolsas de sangue en África ...",

    },
    {
        id:12,
        name: 'Drone-Fumi',
        productType: 'Drone especiales para uso al campo',
        price: 1500000,
        rating: 6,
        image: 'https://www.comprar.com/wp-content/uploads/2018/01/Dron-trabajando-en-el-campo-e1516118091111.jpg',
        description:  "Imágenes de Drones. Llegan los drones agricultores.",

    },
    {
        id:13,
        name: 'Drone-Police',
        productType: 'Drone uso policial',
        price: 45000,
        rating: 6,
        image: 'https://th.bing.com/th/id/R02dc34b578d1449b9f7017ce739aab2e?rik=7kaC3ZBHldCAQg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Yw4fl3wemoY%2fVRt3c6lIHwI%2fAAAAAAAAFUM%2fa2DPSk_-AZ4%2fw1200-h630-p-nu%2fDrone%2bPolicia%2bColombia.jpg&ehk=7JmYUJok0hYdzoq6ASoTomdWMXYy6QAk4UPmR5ciL88%3d&risl=&pid=ImgRaw',
        description:  "Imágenes de Drones. Imágenes relacionadas:Con 35 drones y tecnología de punta, la Policía Nacional ..",

    },
    {
        id:14,
        name: 'Drone-US.',
        productType: 'Drone especiales para uso militar',
        price: 15000000,
        rating: 6,
        image: 'https://th.bing.com/th/id/R287c84a18b1a21801db136545e814bff?rik=oOewmaCR5%2bDY5Q&riu=http%3a%2f%2fwww.tecnogetafe.es%2fwp-content%2fuploads%2f2017%2f01%2fdron.jpg&ehk=0WwwDbKNn8ozr4HBqp5%2fRqBQyuv2icOBYw%2fGFyA90%2fM%3d&risl=&pid=ImgRaw',
        description:  "Imágenes de Drones. Imágenes relacionadas: El negocio de los drones militares crecerá un 40% al año ...",

    },
    {
        id:15,
        name:'Drone-W.',
        productType: 'The U.S. Drone War You Dont Know About | HuffPost',
        price: 19000000,
        rating: 6,
        image: 'https://th.bing.com/th/id/R0c885ebd5158c78109f9f86a27fc7099?rik=eYk93ILdEmkjQg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1953311%2fimages%2fo-DRONE-facebook.jpg&ehk=ynWr2AOQ54me2yI4TL4aWHhPLd7SgIzXTkYwe2Sm7VM%3d&risl=&pid=ImgRaw',
        description:  "Imágenes de Drones. Imágenes relacionadas: The U.S. Drone War You Don't Know About | HuffPost",

    },
]

export default products;