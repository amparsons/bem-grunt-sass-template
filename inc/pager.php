<ul class="pager">
    <li class="pager__item pager__item_prev">
        <a href="#" class="pager__link">
            <i class="icon-arrow-left"></i>
        </a>
    </li>

    <?php for($i=0; $i<5; $i++){ ?>
        <li class="pager__item pager__item_number">
            <a href="#" class="pager__link"><?php echo $i+1; ?></a>
        </li>
    <?php } ?>

    <li class="pager__item pager__item_next">
        <a href="#" class="pager__link">
            <i class="icon-arrow-right"></i>
        </a>
    </li>
</ul>   <!-- /pager -->
<hr class="hide" />