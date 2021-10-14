-- Varibles
declare @html varchar(max)
declare @fechaActual varchar(max)
declare @plantilla varchar(max)

-- obtener el CODIGO HTML que se mandara en el correo
set @html =  (SELECT [CODIGO HTML] FROM TB_MENSAJES_EMAIL WHERE ID = 4)

-- Obtener la fecha actual gracias a una funcion que cree.
set @fechaActual = (SELECT dbo.FN_OBTENER_FECHA_ACTUAL())

-- Inyectar la fecha actual
set @plantilla = (select REPLACE( @html,'<span id="fecha">Ciudad de México, 05 de Octubre de 2021.</span>', @fechaActual))
select @html as 'SIN_FECHA',  @plantilla as 'CON_FLECHA'

<![CDATA[]]>
