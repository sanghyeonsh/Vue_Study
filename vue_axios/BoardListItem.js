export default {
  template: `
    <tr>
    <td>{{ board.articleno }}</td>
    <td>{{ board.subject }}</td>
    <td>{{ board.content }}</td>
    <td>{{ board.userid }}</td>
    <td>{{ board.regtime }}</td>
    </tr>
  `,
  props: {board : Object, title:String}

}