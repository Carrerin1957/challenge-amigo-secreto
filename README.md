# README - Bloque de Código para Gestión de Amigos y Sorteo

Este código en JavaScript tiene como objetivo gestionar una lista de amigos y realizar un sorteo para elegir un "amigo secreto". A continuación, se detalla su funcionamiento:

## Descripción de funciones:

1. **`agregarAmigo()`**:
   - Obtiene el nombre de un amigo desde un campo de entrada (`input`).
   - Elimina los espacios en blanco adicionales en el nombre ingresado.
   - Valida que el nombre solo contenga letras (mayúsculas, minúsculas, tildes y ñ) y espacios en blanco. Si el nombre no cumple con este criterio, muestra una alerta.
   - Verifica que el amigo no esté ya en la lista.
   - Si las validaciones son correctas, agrega el nombre del amigo a un array (`amigos`) y actualiza la lista de amigos en la interfaz.

2. **`actualizarLista()`**:
   - Se encarga de actualizar el contenido de la lista de amigos en el DOM.
   - Limpia la lista antes de agregar los nuevos elementos para reflejar la lista actualizada.

3. **`sortearAmigo()`**:
   - Realiza un sorteo aleatorio si hay amigos en la lista.
   - Muestra el nombre del "amigo secreto" seleccionado en un área de resultados.
   - Si no hay amigos en la lista, muestra una alerta indicando que la lista está vacía.

## Funcionamiento:

- El usuario ingresa un nombre de amigo en un campo de texto.
- Si el nombre es válido y no está repetido, el amigo se agrega a la lista.
- Luego, la lista de amigos se actualiza en la página web.
- En cualquier momento, el usuario puede realizar un sorteo aleatorio para elegir un "amigo secreto" de la lista.

Este bloque de código está diseñado para interactuar con elementos del DOM (HTML), como campos de texto, botones y listas, proporcionando una experiencia sencilla de gestión y sorteo de amigos.
