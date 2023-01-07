drop database if exists soloweb;

create database soloweb;

use soloweb;

Create table if not exists
    Tbl_Usuario (
        idUsuario int unsigned  not null  auto_increment,
        nombre varchar(30) not null,
        cedula varchar(10) not null,
        usuario varchar(20) not null,
        contraseña varchar(100) not null,

        constraint PK_idUsuario primary key (idUsuario)
)engine=InnoDB;
    
Create table if not exists
    Tbl_Bodega (
        idBodega int unsigned  not null  auto_increment,
        idProductoBode varchar(24) not null,
        fechaCompra date not null,
        productorBode varchar(20) not null,
        variedadBode varchar(15) not null,
        alturaBode int(8) not null,
        cantidadBode int(8) not null,
        precioBode int (8) not null,

        constraint PK_idBodega primary key (idBodega)
)engine=InnoDB;



Create table if not exists
    Tbl_Trilladora (
        idTrilladora int unsigned  not null  auto_increment,
        humedadTrilla float not null,
        pesoInicialTrilla int (5) not null,
        pesoMalla17 int(5),
        pesoMalla15 int(5),
        pesoMalla13 int(5),
        pesoFinalTrilla int(5),
        factorRendimiento int(5) not null,
        fechaTrilla date,

        idBodegaTrilla int unsigned  not null,

        constraint PK_idTrilladora primary key (idTrilladora),

        constraint FK_idBodegaTrilla foreign key (idBodegaTrilla) references Tbl_Bodega (idBodega)
)engine=InnoDB;

Create table if not exists
    Tbl_Colores(
        idColor int unsigned  not null  auto_increment,
        hexadeximal varchar(8) not null,
        descripcion text,

        constraint PK_idColor primary key (idColor)
)engine=InnoDB;


Create table if not exists
    Tbl_ColorTiempo(
        idColorTiempo int unsigned  not null  auto_increment,
        muestra1 varchar (20),
        constraint PK_idColorTiempo primary key (idColorTiempo)
)engine=InnoDB;


Create table if not exists
    Tbl_Tostadora (
        idTostadora int unsigned  not null  auto_increment,
        lotePostostion varchar(24) not null,
        humedadInicialTos float not null,
        humedadFinalTos float not null,
        temperaturaMin int(3) not null,
        cambioTemperatura int(3) not null,
        pesoFinalTos int(5) not null,
        tiempoTos time not null,

        idTrilladoraTost int unsigned  not null,
        idColorTost int unsigned  not null,

        constraint PK_idTostadora primary key (idTostadora),

        constraint FK_idTrilladoraTost foreign key (idTrilladoraTost) references Tbl_Trilladora (idTrilladora),
        constraint FK_idColorTost foreign key (idColorTost) references Tbl_Colores (idColor)
)engine=InnoDB;


Create table if not exists
    Tbl_Granulometria (
        idMalla int unsigned  not null  auto_increment,
        numeroMalla int(5) not null,
        descripcion text,

        constraint PK_idMalla primary key (idMalla)
)engine=InnoDB;


Create table if not exists
    Tbl_Molienda (
        idMolienda int unsigned  not null  auto_increment,
        pesoInicialMol int(5) not null,
        pesoFinalMol int(5) not null,
        fechaMolienda date not null,

        idTostadoraMol int unsigned  not null,
        idMallaMol int unsigned  not null,

        constraint PK_idMolienda primary key (idMolienda),
        constraint FK_idTostadoraMol foreign key (idTostadoraMol) references Tbl_Tostadora (idTostadora),
        constraint FK_idMallaMol foreign key (idMallaMol) references Tbl_Granulometria (idMalla)
)engine=InnoDB;


Create table if not exists
    Tbl_Presentacion (
        idPresentacion int unsigned  not null  auto_increment,
        nombrePresentacion varchar(30) not null,
        descripcion text,

        constraint PK_idPresentacion primary key (idPresentacion)
)engine=InnoDB;


Create table if not exists
    Tbl_Inventario (
        idInventario int unsigned  not null  auto_increment,
        pesoUnidad int (5) not null,
        pesoTotal int (5) not null,
        operario varchar(30) not null,
        fechaIngreso date not null,

        idPresentacionInv int unsigned  not null,
        idTostadoraInv int unsigned  not null,

        constraint PK_idInventario primary key (idInventario),
        constraint FK_idPresentacionInv foreign key (idPresentacionInv) references Tbl_Presentacion (idPresentacion),
        constraint FK_idTostadoraInv foreign key (idTostadoraInv) references Tbl_Tostadora (idTostadora)
)engine=InnoDB;


Create table if not exists
    Tbl_lote (
        idLote int unsigned  not null  auto_increment,
        nombreLote varchar(30) not null,
        descripcion text,

        constraint PK_idLote primary key (idLote)
)engine=InnoDB;

Create table if not exists
    Tbl_sombrio (
        idSombrio int unsigned  not null  auto_increment,
        nombreSombra varchar(30) not null,
        descripcion text,

        constraint PK_idSombrio primary key (idSombrio)
)engine=InnoDB;

Create table if not exists
    Tbl_LoteFinca (
        idLoteFinca int unsigned  not null  auto_increment,
        caficultor varchar(30) not null,
        alturamsnm int (5) not null,
        fechaSiembra date not null,
        humedadAmbiente float not null,
        cantidadArboles int (8) not null,

        idVariedadLF int unsigned  not null,
        idLoteLF int unsigned  not null,
        idSombrioLF int unsigned  not null,

        constraint PK_idLoteFinca primary key (idLoteFinca),

        constraint FK_idVariedadLF foreign key (idVariedadLF) references Tbl_Variedad (idVariedad),
        constraint FK_idLoteLF foreign key (idLoteLF) references Tbl_lote (idLote),
        constraint FK_idSombrioLF foreign key (idSombrioLF) references Tbl_sombrio (idSombrio)
)engine=InnoDB;



Create table if not exists
    Tbl_Compras (
        idCompra int unsigned  not null  auto_increment,
        fechaCompra date not null,
        distribuidor varchar(30) not null,
        producto varchar(30) not null,
        presentacion varchar(25) not null,
        cantidad int(5) not null,
        precioUnitario int(8) not null,
        valorTotal int (8) not null,

        idUsuarioComp int unsigned  not null,

        constraint PK_idCompra primary key (idCompra),
        constraint FK_idUsuarioComp foreign key (idUsuarioComp) references Tbl_Usuario(idUsuario)
)engine=InnoDB;

