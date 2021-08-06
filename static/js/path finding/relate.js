// Make edges between Nodes.
function relate(x, n, dicta, weight = 1) {
    if (x == 'U') {
         n.up = dicta;
         dicta.down = n;
         n.up_weight = weight;
         dicta.down_weight = weight;
    }
    else if (x == 'L') {
         n.left = dicta;
         dicta.right = n;
         n.left_weight = weight;
         dicta.right_weight = weight;
    }
    else if (x == 'R') {
         n.right = dicta;
         dicta.left = n;
         n.right_weight = weight;
         dicta.left_weight = weight;
    }
    else if (x == 'D') {
         n.down = dicta;
         dicta.up = n;
         n.down_weight = weight;
         dicta.up_weight = weight;
    }
}
// BY UTKARSH JAISWAL